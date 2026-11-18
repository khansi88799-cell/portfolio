// Capture portfolio screenshots and tour videos from the live product sites.
//
//   node scripts/capture.mjs login <site>       open a browser at the site's admin login; you sign in, then press Enter
//   node scripts/capture.mjs shots [site...]    desktop + phone screenshots (admin pages only if a login is saved)
//   node scripts/capture.mjs video [site...]    short scroll-through video of the public pages
//
// Admin pages are captured with personal data blurred: table cells, form fields, phone numbers,
// emails and anything marked [data-sensitive]. Review every admin image before publishing.
// Sign-ins are saved in .auth/<site> (git-ignored); no password is ever stored by this script.

import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const TARGETS = JSON.parse(readFileSync(join(ROOT, 'scripts/targets.json'), 'utf8'));
const OUT = join(ROOT, 'public/media');
const AUTH = join(ROOT, '.auth');
const RAW = join(ROOT, '.capture-raw');

const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

// Hide personal data before any admin capture
const BLUR_CSS = `
  td, input, textarea, select, [data-sensitive], [class*="customer" i], [class*="patient" i], [class*="phone" i]
  { filter: blur(6px) !important; }
  th, button, label { filter: none !important; }`;
const BLUR_TEXT = () => {
  const re = /(\+?\d[\d\s-]{8,}\d)|([\w.+-]+@[\w-]+\.[\w.]+)/;
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walk.nextNode());) if (re.test(n.textContent) && n.parentElement) n.parentElement.style.filter = 'blur(6px)';
};

const pick = (names) => (names.length ? names : Object.keys(TARGETS)).map((n) => {
  if (!TARGETS[n]) throw new Error(`unknown site: ${n} (known: ${Object.keys(TARGETS).join(', ')})`);
  return [n, TARGETS[n]];
});

async function settle(page) {
  await page.waitForLoadState('networkidle').catch(() => {});
  await dismissBanners(page);
  // Trigger lazy content, then return to the top
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}

// Dismiss cookie banners: prefer declining, otherwise hide the banner
async function dismissBanners(page) {
  const decline = page.getByRole('button', { name: /decline|reject|necessary only|only necessary|no thanks/i }).first();
  if (await decline.isVisible().catch(() => false)) await decline.click().catch(() => {});
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('body *')) {
      const s = getComputedStyle(el);
      if ((s.position === 'fixed' || s.position === 'sticky') && /cookie/i.test(el.textContent || '') && el.textContent.length < 800) el.style.display = 'none';
    }
  });
}

async function login(site) {
  const t = TARGETS[site];
  if (!t?.login) throw new Error(`${site} has no admin login configured`);
  const ctx = await chromium.launchPersistentContext(join(AUTH, site), { headless: false, viewport: VIEWPORTS.desktop.viewport });
  const page = ctx.pages()[0] ?? (await ctx.newPage());
  await page.goto(t.base + t.login);
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  await rl.question(`Sign in to ${site} in the browser window, then press Enter here to save the session... `);
  rl.close();
  await ctx.close();
  console.log(`saved sign-in for ${site} in .auth/${site}`);
}

async function shots(names) {
  for (const [site, t] of pick(names)) {
    const dir = join(OUT, site);
    mkdirSync(dir, { recursive: true });
    const hasAuth = existsSync(join(AUTH, site));
    for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
      const browser = hasAuth ? null : await chromium.launch();
      const ctx = hasAuth
        ? await chromium.launchPersistentContext(join(AUTH, site), { headless: true, ...vp })
        : await browser.newContext(vp);
      const page = await ctx.newPage();
      for (const p of t.pages) {
        if (p.auth && !hasAuth) { console.log(`skip ${site}/${p.name} (run: login ${site})`); continue; }
        await page.goto(t.base + p.path, { waitUntil: 'domcontentloaded' });
        if (p.auth && /login/.test(page.url())) { console.log(`skip ${site}/${p.name}: sign-in expired`); continue; }
        await settle(page);
        if (p.auth) { await page.addStyleTag({ content: BLUR_CSS }); await page.evaluate(BLUR_TEXT); await page.waitForTimeout(300); }
        const png = await page.screenshot({ fullPage: false });
        const file = join(dir, `${p.name}-${vpName}.webp`);
        await sharp(png).webp({ quality: 80 }).toFile(file);
        console.log(`saved ${file.replace(ROOT, '')}${p.auth ? '  (admin, blurred: review it)' : ''}`);
      }
      await ctx.close();
      await browser?.close();
    }
  }
}

async function video(names) {
  for (const [site, t] of pick(names)) {
    if (!t.video) continue;
    rmSync(RAW, { recursive: true, force: true });
    const browser = await chromium.launch();
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, recordVideo: { dir: RAW, size: { width: 1280, height: 800 } } });
    const page = await ctx.newPage();
    for (const s of t.video.steps) {
      if (s.goto) { await page.goto(t.base + s.goto, { waitUntil: 'networkidle' }).catch(() => {}); await dismissBanners(page); await page.waitForTimeout(1200); }
      if (s.scroll) await page.evaluate(async (px) => {
        for (let y = 0; y < px; y += 8) { window.scrollBy(0, 8); await new Promise((r) => setTimeout(r, 12)); }
      }, s.scroll);
      await page.waitForTimeout(700);
    }
    await ctx.close();
    await browser.close();
    const webm = join(RAW, readdirSync(RAW).find((f) => f.endsWith('.webm')));
    const mp4 = join(OUT, site, `${t.video.name}.mp4`);
    mkdirSync(join(OUT, site), { recursive: true });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', webm, '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', mp4]);
    console.log(`saved ${mp4.replace(ROOT, '')}`);
  }
  rmSync(RAW, { recursive: true, force: true });
}

const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'login') await login(args[0]);
else if (cmd === 'shots') await shots(args);
else if (cmd === 'video') await video(args);
else console.log('usage: node scripts/capture.mjs login <site> | shots [site...] | video [site...]');
