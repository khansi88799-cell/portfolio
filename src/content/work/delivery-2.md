---
title: "Delivery 2.0"
headline: "Bringing a delivery journey that lived in a partner's app into our own."
tagline: "Business Analyst for a global QSR brand's ordering app, moving address and delivery-store selection out of a third-party app and launching across five markets."
kind: enterprise
featured: true
company: "Capgemini · global QSR brand"
role: "Business Analyst (former iOS developer and QA lead on the same product)"
period: "Apr 2024 – Aug 2025"
status: Shipped
order: 2
tags: [Mobile ordering, APIs, Multi-market]
problem: "To switch to delivery, customers had to pick their address and delivery store inside a third-party delivery partner's app, outside the brand's own ordering journey."
outcome: "The whole address and store-selection flow moved into the brand's app. Version 2.0 launched in the US with 2 cosmetic bugs and no high or critical defects, then rolled out to the UK, Germany, Australia and Canada."
stages: [Discover, Understand, Define, Build, Launch, Measure, Improve]
stack: [Google Places API, Places Autocomplete, Address Validation API, JIRA, Confluence, BPMN 2.0, Adobe Workfront]
metrics:
  - { value: "5", label: "markets: US, UK, DE, AU, CA" }
  - { value: "600+", label: "manual and automated test cases" }
  - { value: "0", label: "high or critical bugs at US launch" }
beforeAfter:
  - { area: "Address entry", before: "Handled inside a third-party delivery partner's app", after: "A new address flow inside the brand's own app" }
  - { area: "Address checks", before: "Out of the brand's control", after: "Google Address Validation confirms the address is real and deliverable" }
  - { area: "Store choice", before: "Picked in the partner's app", after: "Distance from the customer and nearby stores worked out in-app, with clear store-closed and out-of-area messages" }
  - { area: "Error handling", before: "Undocumented", after: "API documents covering every error code, timeout and bad request" }
flow:
  - { title: "Enter address", body: "Autocomplete suggests real addresses as the customer types." }
  - { title: "Validate", body: "The address is checked before it is saved." }
  - { title: "Find stores", body: "Distance and nearby delivering stores are worked out." }
  - { title: "Order", body: "The customer continues to the menu without leaving the app." }
---

## Where I started

I joined this product as an iOS developer, building delivery features in SwiftUI on the store-discovery, cart, order and payment APIs. I then took on QA alongside development and led the delivery module's testing: 400+ cases across API, manual, UI and automation, with four automation suites running daily on BrowserStack (Open Test). As senior iOS developer I handled the UK release, which passed UAT with zero bugs.

That background shaped how I worked as a BA: I wrote requirements that a developer and a tester could both act on without coming back with questions.

## The problem

Version 1.0 handed customers off to a third-party delivery partner's app to choose an address and a delivery store. The brand had no control over that step, and the journey felt like two apps stitched together.

## What I did

- Ran gap analysis between Order 1.0 and 2.0 and benchmarked the address and checkout flows of other delivery apps.
- Wrote the BRD and FRD, mapped the order and delivery journeys in BPMN 2.0, and kept an RTM so every requirement traced to a test.
- Broke the work into epics and user stories with acceptance criteria for each address state: valid, invalid, out of area, store closed.
- Specified the Google Places, Autocomplete and Address Validation integrations, including what the app does for every error code, timeout and bad request.
- Ran client reviews, sprint ceremonies and client demos, and planned the multi-market rollout in Adobe Workfront.

## Outcome

Version 2.0 went live in the US with two cosmetic bugs and no high or critical defects, then rolled out market by market to the UK, Germany, Australia and Canada, backed by 600+ manual and automated test cases. The new flow carried the app through record holiday-peak ordering.
