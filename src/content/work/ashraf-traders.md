---
title: "Ashraf Traders"
headline: "From a counter ledger to GST bills in one click."
tagline: "Online catalogue, quotation requests and GST billing with Tally export for a two-shop steel and roofing business in Mumbai."
kind: independent
featured: false
company: "Independent · client project"
role: "Product Owner, Business Analyst and engineer"
period: "Jun 2026 – present"
status: Live
order: 5
tags: [Manual to automated, GST, Small business]
link: https://ashraf-traders.netlify.app
problem: "A family steel and roofing business ran every quote, bill and GST entry by hand across two shops. Quotes were taken over the phone, dues lived in a register, and every bill was typed again into Tally at filing time."
outcome: "Customers browse size charts and send quotation requests online; the shop turns a request into a GST invoice in one click and sends it on WhatsApp. Bills export straight into Tally, so nothing is retyped."
stages: [Discover, Understand, Define, Ideate, Build, Launch, Adopt, Improve]
stack: [Next.js, TypeScript, Tailwind CSS, Supabase (Postgres), Row-Level Security, Expo, GitHub Actions, Netlify]
metrics:
  - { value: "1 click", label: "from customer request to GST bill" }
  - { value: "0", label: "bills retyped into Tally" }
  - { value: "15", label: "product pages with size charts" }
  - { value: "2", label: "shops in one system" }
beforeAfter:
  - { area: "Catalogue", before: "Customers phoned or walked in to ask about sizes", after: "Every product, size and thickness online with photos and size charts, per shop" }
  - { area: "Enquiries", before: "Quotes written down from phone calls", after: "Multi-size quotation requests land in the admin" }
  - { area: "Billing", before: "Handwritten, GST worked out by hand", after: "GST invoices with CGST/SGST or IGST, HSN codes and automatic numbering" }
  - { area: "Payments", before: "Dues tracked in a register", after: "Payments recorded per bill, balance due always visible" }
  - { area: "GST filing", before: "Every bill retyped into Tally", after: "GST spreadsheet and Tally import files exported in one step" }
  - { area: "Two shops", before: "Separate books and stock", after: "One system, each shop with its own stock, letterhead and invoice series" }
flow:
  - { title: "Browse", body: "The customer checks a size chart on their phone." }
  - { title: "Request a quote", body: "Several sizes and quantities in one request." }
  - { title: "Convert to bill", body: "One click fills a GST bill; totals calculate themselves." }
  - { title: "Share", body: "PDF or WhatsApp, on the shop's letterhead." }
  - { title: "Record payment", body: "Part or full payment saved against the bill." }
  - { title: "File GST", body: "Export to a spreadsheet and Tally, with no retyping." }
cover: /media/ashraf-traders/home-desktop.webp
video: /media/ashraf-traders/tour.mp4
gallery:
  - { src: /media/ashraf-traders/products-desktop.webp, alt: "Product catalogue" }
  - { src: /media/ashraf-traders/category-desktop.webp, alt: "Category page with size chart" }
  - { src: /media/ashraf-traders/request-desktop.webp, alt: "Quotation request" }
  - { src: /media/ashraf-traders/home-phone.webp, alt: "Home page on a phone", phone: true }
---

## The problem

Ashraf Traders sells M.S. beams, angles, channels, pipes and roofing sheets from two shops, in Bhandup and Padgha. Customers phoned to ask what sizes were in stock, quotes were written down from calls, bills were handwritten with GST worked out by hand, and the accountant retyped every bill into Tally at filing time.

## My role

Product owner, business analyst and engineer. The owner had a real process but no specification, so I used working software as the elicitation tool: short demos, quick feedback, then the next slice. Version 1 runs the business today; version 2 is in progress.

## Prioritisation

I sequenced the backlog by what unblocked revenue first:

1. **GST billing**, because every sale needs a correct invoice.
2. **Per-shop catalogue and stock**, so each shop sees its own.
3. **Quotation requests**, so buyers can ask for prices online.
4. **Accounts and exports**, so month-end is no longer manual.

## The billing rules

- An intra-state sale splits GST into CGST and SGST; an inter-state sale charges IGST. The form works out which applies.
- Invoice numbers are allocated by the database per shop and year, so two bills can never share a number.
- Totals are calculated in the database, so the website, the mobile admin app and the Tally export always agree.
- Bills over ₹50,000 are flagged for an e-way bill, and its number is stored on the invoice.

## Key decisions

| Decision | Why |
|---|---|
| Business rules in database functions with automated tests | One source of truth for the website and the mobile app |
| Postgres Row-Level Security | The public can read the catalogue and send requests; only admins can do more, and there is no public sign-up |
| Price by weight, size or piece | Matches how steel is actually sold |
| Requests expire after 48 hours | The inbox stays current without manual clean-up |
