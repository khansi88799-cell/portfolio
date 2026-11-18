---
title: "Deen Companion"
headline: "A prayer and Quran app that works with no internet, no account and no ads."
tagline: "A free, offline-first Islamic companion app for iOS and Android, with on-device prayer times and an azan that sounds even when the app is closed."
kind: independent
featured: false
company: "Independent · community project"
role: "Product Owner & Senior Software Engineer"
period: "Oct 2026 – present"
status: In review
order: 7
tags: [Mobile, Offline-first, Privacy]
problem: "Most prayer apps need an account, show ads or stop working offline, and many fail at the job people rely on most, an azan that sounds on time when the phone is locked."
outcome: "Prayer times are calculated on the phone, the azan plays on time with the app closed, and the Quran, hadith and audio download once and work offline. The Android build is ready for Google Play."
stages: [Discover, Understand, Define, Ideate, Prototype, Build]
stack: [React Native, Expo, TypeScript, SQLite, Zustand, Swift, Kotlin, Cloudflare Workers, R2, D1, Jest]
metrics:
  - { value: "216", label: "automated tests in 27 suites" }
  - { value: "20", label: "feature modules" }
  - { value: "2", label: "platforms from one codebase" }
  - { value: "0", label: "accounts, ads or trackers" }
cover: /media/deen-companion/cover.webp
gallery:
  - { src: /media/deen-companion/home-phone.webp, alt: "Home: next prayer countdown and the day's times", phone: true }
  - { src: /media/deen-companion/azan-lock-phone.webp, alt: "Azan on the lock screen, app closed", phone: true }
  - { src: /media/deen-companion/azan-stop-phone.webp, alt: "One tap stops the azan", phone: true }
  - { src: /media/deen-companion/about-phone.webp, alt: "About: every text and recording credited", phone: true }
caveats:
  - Not on a store yet. Android is ready to upload; the App Store needs a paid Apple developer account.
  - Android was tested on an emulator. A physical Android phone check is still to do.
  - Some translation and recording licences are still being confirmed, and the app says so on its About screen.
  - Built with AI-assisted development. I set the requirements, reviewed the results and tested on devices.
---

## The problem

People who pray five times a day want the times, the azan and the Quran to simply work, on any phone, anywhere, with their location kept private. Most apps ask for an account, show ads or stop working without a connection.

## What it does

- **Prayer and azan**: five daily prayers, several calculation methods, Hanafi or Shafi'i Asr, a choice of azan recordings, a reminder before each prayer and custom mosque timings.
- **Quran**: Arabic with Urdu and English translations, verse-by-verse recitation, spoken translation audio, bookmarks and follow-along scrolling.
- **Hadith**: Sahih al-Bukhari, Sahih Muslim and the Forty Hadith of an-Nawawi, downloaded once and readable offline.
- **Daily tools**: Qibla compass, Hijri calendar, duas, the 99 Names with audio, tasbeeh counter and zakat calculator.
- **Care for users**: accessibility settings, a first-run setup and permission checklist, an app tour and in-app feedback.

## Engineering notes

### An azan that fires with the app closed
Each prayer is scheduled with Android's alarm-clock scheduler, which still fires in battery saver. A media-playback service plays the full azan, raises a low volume to about 85% and restores it afterwards, and respects silent mode. Alarms are set again after a restart or an app update.

### A lock-screen bug found by testing
On a locked emulator the azan played with no notification and no Stop button: Android hides low-importance notifications on the lock screen. A silent channel at default importance with public visibility fixed it, re-tested with the app in the background and fully closed.

### Opening a verse exactly where it belongs
The list estimated the height of rows it hadn't drawn, so jumping to a verse drifted about 30 verses during follow-along recitation. The fix aims, checks what became visible, corrects, then measures and nudges the verse into place.

### Keeping downloads out of cloud backups
A small Swift module excludes downloads from iCloud, and Android backup rules do the same. I verified both on the devices rather than assuming: file attributes on a real iPhone, and a real Android backup that came to 195 KB of settings only.

## Quality and release

216 automated tests in 27 suites, about 15,800 lines of TypeScript, and changes through pull requests with typecheck, lint and tests on each. A Cloudflare Worker with R2 and D1 serves content packs on the free plan, with its limits mapped. Release preparation includes a signed Android App Bundle, a privacy policy and support page, and eight store-paperwork guides.
