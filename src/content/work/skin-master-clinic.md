---
title: "Skin Master Clinic"
headline: "From three people juggling spreadsheets to one receptionist running the clinic online."
tagline: "A booking and clinic-management platform that took a Pune skin clinic from paper and Google Sheets to one digital system."
kind: independent
featured: true
company: "Independent · client project"
role: "Product Owner, Business Analyst and engineer"
period: "Jul – Nov 2026"
status: Live
order: 1
tags: [Manual to automated, 0→1, Healthcare, Privacy]
link: https://skinmasterclinic.netlify.app
problem: "Bookings came by phone and WhatsApp and were tracked by hand. Patient history, bills and product stock lived in separate Google Sheets kept by three people, and the doctor had to supervise every entry."
outcome: "One secure system now holds bookings, patients, visits, bills, stock and reviews. A single receptionist runs the front desk from a phone or tablet, and the clinic owner oversees everything from the admin."
stages: [Discover, Understand, Define, Ideate, Build, Launch, Adopt, Measure, Improve]
stack: [Next.js, React, TypeScript, Tailwind CSS, Supabase (Postgres), Google Calendar API, Web push, WhatsApp, GA4, Netlify]
metrics:
  - { value: "3 → 1", label: "people needed for front-desk admin" }
  - { value: "500+", label: "patients in one system" }
  - { value: "10–15", label: "online bookings a month" }
  - { value: "9", label: "releases in four months" }
beforeAfter:
  - { area: "Booking", before: "Phone and WhatsApp only, tracked by hand", after: "Online booking any time; requests land in the admin with a push notification" }
  - { area: "Appointments", before: "Scattered across chats and sheets", after: "One dashboard and calendar, colour-coded by status and synced to Google Calendar" }
  - { area: "Patient records", before: "Not stored systematically", after: "A history page per patient: visits, treatments, remarks, bills and payments, found by mobile number" }
  - { area: "Billing", before: "Worked out by hand", after: "Calculated automatically: products, discount, fees, paid and balance" }
  - { area: "Product stock", before: "A spreadsheet updated by hand", after: "Stock falls when products are used in a visit; Excel stock sheet on demand" }
  - { area: "Reminders", before: "Typed out manually", after: "One-tap WhatsApp reminders and feedback requests" }
  - { area: "Privacy", before: "No policy", after: "Lawyer-drafted privacy policy, recorded consent, cookie controls and automatic deletion" }
  - { area: "Staffing", before: "Three people with the doctor supervising", after: "One receptionist; the owner reviews from the admin" }
flow:
  - { title: "Patient books online", body: "At any hour, after agreeing to the terms. Staff get a push notification." }
  - { title: "Front desk confirms", body: "One tap adds it to Google Calendar, with a clash check." }
  - { title: "WhatsApp reminder", body: "Sent with one tap the day before." }
  - { title: "At the visit", body: "The patient's full history is on one page." }
  - { title: "After the visit", body: "One form saves remarks and products; the bill and stock update themselves." }
  - { title: "Follow-up", body: "\"Book next\" and a review request on WhatsApp." }
  - { title: "Month end", body: "Bookings to CSV, stock to Excel, and analytics on where patients came from." }
cover: /media/skin-master-clinic/home-desktop.webp
video: /media/skin-master-clinic/tour.mp4
gallery:
  - { src: /media/skin-master-clinic/services-desktop.webp, alt: "Services page" }
  - { src: /media/skin-master-clinic/testimonials-desktop.webp, alt: "Testimonials, including curated Google reviews" }
  - { src: /media/skin-master-clinic/home-phone.webp, alt: "Home page on a phone", phone: true }
  - { src: /media/skin-master-clinic/services-phone.webp, alt: "Services on a phone", phone: true }
---

## The problem

Skin Master Clinic is a skin, hair and aesthetics clinic in Pune. Before this project it ran entirely by hand. Appointments came by phone and WhatsApp with no single list of who was coming when. A returning patient's treatments and payments had no fixed home. Stock was a spreadsheet that had to be subtracted by hand, and bills were worked out per visit. Three people kept it all going, and the doctor had to check their work.

The clinic needed one place for everything, simple enough for one person at the front desk.

## My role

Product owner, business analyst and engineer. I ran demo-and-review cycles with the clinic owner, turned what I heard into a prioritised backlog, and made every scope call with the owner's sign-off. The first version went live in under seven weeks; eight more releases followed, each reviewed with the clinic.

## Two halves, one database

- **A patient-facing website**, mobile-first because most patients arrive from a phone: services, the doctor's profile, opening hours, a map, testimonials with Google reviews, and a booking form with required consent.
- **A private clinic system** built for a phone, the clinic's tablet and a small laptop: dashboard and calendar, appointments, patient history, visit billing, product stock, WhatsApp messages, review moderation and analytics.

## Key decisions

| Decision | Why |
|---|---|
| Patients identified by mobile number | Every past booking joins up automatically, without asking patients to create accounts |
| Bills recalculated on the server | A figure can't be changed from the browser |
| Row-Level Security limited to three named admins | Being signed in isn't enough to read patient data, and public sign-up is off |
| WhatsApp links, not an SMS service | Patients are already there, and it costs nothing |

## Privacy built in

Because the system holds health information, I treated Indian privacy law as a feature: a lawyer-drafted privacy policy (DPDP Act 2023 and Rules 2025, IT Act and SPDI Rules), consent recorded with a timestamp on every booking, cookie switches before any analytics, and automatic deletion of stale requests after 12 months. Each promise in the policy is backed by a feature.

## When things broke

After launch, Google rejected every calendar event with "time range is empty". I tested against the live API with standalone scripts and traced it to a timezone conversion that silently turned local times into UTC, plus a corrupted service-account key in the hosting settings. I fixed both, verified against production and confirmed with the owner. The lesson I now write into every test plan: static checks don't prove an integration works; test against the real service.

## What's next

A custom domain, an access audit log ahead of the DPDP logging requirement in May 2027, and scheduled WhatsApp reminders.
