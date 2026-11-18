---
title: "Insurance Learning Desk"
headline: "I couldn't find one place to learn insurance as a BA, so I built it."
tagline: "A free learning platform that takes business analysts from insurance beginner to interview-ready."
kind: independent
featured: false
company: "Independent · self project"
role: "Product Owner, Business Analyst and developer"
period: "Oct 2026 – present"
status: Live
order: 6
tags: [EdTech, BFSI, Rules as logic]
link: https://insurance-tool-kit.pages.dev
problem: "Material for insurance BAs was spread across IRDAI circulars, insurer brochures, training documents, blogs and forums. Much of it was out of date, and none of it connected the rules to what a BA produces: requirements, process flows and test cases."
outcome: "A free, live guide with no sign-up that takes a learner from the basics to interview-ready, with premium calculators that show every step and are checked by regression tests."
stages: [Discover, Understand, Define, Ideate, Build, Launch, Measure, Improve]
stack: [React, TypeScript, Vite, Cloudflare Pages, Automated tests]
metrics:
  - { value: "117", label: "learning points in 9 modules" }
  - { value: "89", label: "interview questions in 13 categories" }
  - { value: "5", label: "premium calculators with regression tests" }
  - { value: "33", label: "search-ready pages" }
cover: /media/insurance-learning-desk/home-desktop.webp
video: /media/insurance-learning-desk/tour.mp4
gallery:
  - { src: /media/insurance-learning-desk/calculators-desktop.webp, alt: "Premium calculator with its step-by-step breakdown" }
  - { src: /media/insurance-learning-desk/interview-desktop.webp, alt: "Interview questions with model answers" }
  - { src: /media/insurance-learning-desk/diagrams-desktop.webp, alt: "Reference BPMN diagrams" }
  - { src: /media/insurance-learning-desk/motor-desktop.webp, alt: "Motor insurance module" }
  - { src: /media/insurance-learning-desk/home-phone.webp, alt: "Progress tracking on a phone", phone: true }
---

## The problem

When I started preparing for insurance BA roles, what I needed was scattered across PDFs, IRDAI circulars, blog posts and training notes. Much of it was out of date, and nothing connected the domain rules to the documents a BA actually writes.

## What's inside

- **Learn**: 9 modules and 117 learning points, each with a plain-English explanation and a worked example, from fundamentals and the value chain to motor, health, life, commercial lines, reinsurance, 2025–26 regulation and tax, and the BA's craft. Learners tick off each point as they master it.
- **8-week study plan** linking each week to topics, calculators and interview categories, with a self-check at the end of the week.
- **Interview prep**: 89 questions in 13 categories, from concepts and calculations to scenarios, SQL, BPMN and behavioural, with model answers, filters and a practice tracker.
- **Premium calculators** for private car, two-wheeler, commercial vehicle, health and term life. Each shows every formula (IDV, own-damage tariff, NCB, third-party slabs, add-ons, GST) and flags rules such as underwriter referral and break-in.
- **9 reference diagrams** BAs draw in real projects, and a **BPMN whiteboard** with swimlanes, claim templates and PNG/SVG export.

## Treating rating rules as business rules

I built the calculators the way I'd specify rules at an insurer: inputs and valid ranges, rule tables, calculation order and rounding, then worked examples. Those examples became automated regression tests, including the boundaries, so a change to one rate table can't silently move a premium.

## My role

Product owner, business analyst and developer: researching the regulations, deciding scope and structure, writing the content, turning rating rules into logic, building and testing the site, and publishing it with a sitemap and Search Console so people can find it.
