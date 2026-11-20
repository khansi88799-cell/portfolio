---
title: "DeadPool Protocol"
headline: "Payment protection for freelancers, from a client who wouldn't pay."
tagline: "NMIMS MBA project: a client risk score before work starts, escrow that releases when a client goes silent, and optional cover against cancellation."
kind: independent
featured: false
company: "NMIMS MBA project"
role: "Product Owner, Business Analyst and builder"
period: "2026"
status: Live
order: 8
tags: [MBA project, Fintech, Escrow]
link: https://deadpoolprotocol.netlify.app
problem: "I delivered an app feature to a client who then refused to pay for it. Nothing was in escrow, and chasing the money would have cost more than the work was worth. Marketplaces like Upwork protect only money the client has already deposited. Clients who go silent, cancel midway or add work they never fund leave the freelancer carrying the loss."
outcome: "A live prototype that covers the whole flow from both the freelancer's and the client's side, backed by a 10-module requirements document and a 5-year financial model that breaks even in Year 3."
stages: [Discover, Understand, Define, Ideate, Prototype, Build, Launch]
stack: [Next.js, TypeScript, PostgreSQL (Neon), Drizzle ORM, Tailwind, Playwright, Netlify]
metrics:
  - { value: "7", label: "guided scenarios in the live prototype" }
  - { value: "25 + 9", label: "unit and end-to-end tests, all passing" }
  - { value: "Year 3", label: "break-even in the base-case model" }
  - { value: "USD 15.6M", label: "Year 5 revenue, base case" }
beforeAfter:
  - { area: "Client risk", before: "The freelancer finds out a client is risky only when payment stops.", after: "A risk score with its reasons is shown before work starts." }
  - { area: "Silent client", before: "A silent client can leave work unpaid for good.", after: "A deadline releases payment automatically." }
  - { area: "Cancelled work", before: "Unpaid or cancelled work is a total loss.", after: "Optional cover pays up to 90% of the milestone." }
flow:
  - { title: "Check client risk", body: "A score from published rules, with the reasons behind it." }
  - { title: "Agree and fund", body: "Milestones are agreed and the client funds escrow." }
  - { title: "Deliver", body: "The client approves, or stays silent and payment releases after three reminders." }
  - { title: "Claim if cancelled", body: "Small claims are paid automatically; contested ones go to three reviewers." }
cover: /media/deadpool-protocol/home-desktop.webp
gallery:
  - { src: /media/deadpool-protocol/clients-desktop.webp, alt: "Client risk: every client scored before work starts" }
  - { src: /media/deadpool-protocol/client-high-risk-desktop.webp, alt: "A high-risk client, with each factor that raised the score" }
  - { src: /media/deadpool-protocol/client-low-risk-desktop.webp, alt: "A low-risk client, with the factors that lowered the score" }
  - { src: /media/deadpool-protocol/guide-desktop.webp, alt: "The built-in guide to every tab and demo person" }
caveats:
  - Prototype only. It uses demo money, with no real payments, identity checks, insurer or blockchain.
  - The risk score uses fixed, published rules rather than a trained AI model, so every result can be checked.
---

## The problem

I delivered an app feature to a client who then refused to pay for it. Nothing was in escrow, and chasing the money would have cost more than the work was worth. Marketplaces like Upwork protect only money the client has already deposited. Clients who go silent, cancel midway or add work they never fund leave the freelancer carrying the loss.

My NMIMS MBA project turned that into a problem-solving proposal, with Upwork as the case organisation.

## What I did

- **Benchmarked the market.** Compared Upwork with nine other ways of hiring freelancers and found the same gaps on every one.
- **Wrote the requirements.** A 10-module requirements document with business rules, acceptance criteria and MoSCoW priorities.
- **Designed the business model.** A 2% escrow fee, and cover priced by client risk (2%, 3.5% or 5%) with a 20% commission on cover.
- **Modelled the numbers.** A 5-year financial model and a four-phase rollout plan with go/no-go checkpoints. Base case: break-even in Year 3, USD 15.6M revenue in Year 5, and about USD 1.0M of funding needed before break-even.
- **Built and launched the prototype.** The whole flow works from both the freelancer's and the client's side: client risk scoring, milestone escrow with automatic release when a client goes silent, optional cover with automatic and panel-decided claims, and an operator dashboard with a full audit trail.

## How to try it

The prototype is live with demo money. A menu at the top switches between demo people (a freelancer, a low-risk client, a high-risk client, three reviewers and an operator), and a demo clock moves time forward so you can watch a silent client's payment release. Seven guided scenarios and a guide to every tab walk you through it.

## My role

Product owner, business analyst and builder: problem research, platform benchmark, requirements, business model, financial model, implementation plan, and the working prototype, tested with 25 unit tests and 9 end-to-end tests (Playwright).
