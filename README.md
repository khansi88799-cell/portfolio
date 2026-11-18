# Portfolio: Mohammad Saeed Khan

Product Owner and Business Analyst portfolio, built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

## Structure

| Path | What it is |
|---|---|
| `src/pages/index.astro` | Home: hero, product lens, selected work, lifecycle tracer, more work, journey, about, contact |
| `src/pages/work/[id].astro` | Case-study page template |
| `src/content/work/*.md` | One Markdown file per case study: headline, problem, outcome, role, metrics, lifecycle `stages`, `beforeAfter`, `flow`, `caveats` (schema in `src/content.config.ts`) |
| `src/lib/stages.ts` | The 10 lifecycle stages and 4 phases used by cards and the tracer |
| `src/components/` | `WorkCard` (featured card) and `Lifecycle` (10-dot bar) |
| `CONTENT_NOTES.md` | Raw facts and open questions behind each case study (git-ignored, private) |
| `public/media/<site>/` | Screenshots (`<page>-desktop.webp`, `<page>-phone.webp`) and `tour.mp4` |
| `scripts/targets.json` | Which sites and pages to capture |
| `scripts/capture.mjs` | Playwright capture script |

## Commands

```bash
npm run dev                                   # local preview at http://localhost:4321
npm run build                                 # static build into dist/
node scripts/capture.mjs shots [site...]      # desktop + phone screenshots
node scripts/capture.mjs video [site...]      # short tour video (MP4 via ffmpeg)
node scripts/capture.mjs login <site>         # sign in to an admin area once (saved in .auth/, git-ignored)
npx wrangler pages deploy dist --project-name saeed-portfolio
```

## Privacy rules for captures

- Admin pages are captured with table cells, form fields, phone numbers and emails blurred. Review every admin image before committing it.
- Cookie banners are declined or hidden before capture.
- Client work (Capgemini) is described in text only, with no screenshots.
- `.auth/` holds browser sign-ins and must never be committed.

## Adding a new product

1. Add the site and its pages to `scripts/targets.json`.
2. Run `node scripts/capture.mjs shots <site>` and `video <site>`.
3. Copy an existing file in `src/content/work/` and fill in the frontmatter and sections. Set `featured: true` for the main grid, `kind: enterprise` for client work (no screenshots or client names). Quote frontmatter strings that contain a colon.
4. `npm run build`, check the preview, then deploy.
