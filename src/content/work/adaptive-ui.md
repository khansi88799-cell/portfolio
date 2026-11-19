---
title: "Adaptive UI"
headline: "Taking a live app from portrait to landscape without breaking it."
tagline: "Product Owner and BA for landscape support across 324 screens of a global QSR brand's app in five markets."
kind: enterprise
featured: true
company: "Capgemini · global QSR brand"
role: "Product Owner & Business Analyst"
period: "Sep 2025 – May 2026"
status: Shipped
order: 3
tags: [Scope discovery, Mobile, Distributed team]
problem: "The client wanted landscape support in a live, portrait-only app on a fixed deadline, and estimated the job at 90 screens. Nothing could break in the markets already using it."
outcome: "My screen-by-screen analysis found 324 screens, including popups and half-sheets. All 324 were delivered across five markets on iOS and Android, with a demo to the client every sprint."
stages: [Discover, Understand, Define, Ideate, Build, Launch, Measure, Improve]
stack: [Confluence, JIRA, Figma, GitHub Copilot, Power BI]
metrics:
  - { value: "324", label: "screens found (estimate was 90)" }
  - { value: "~400", label: "user stories in 21 epics" }
  - { value: "28", label: "developers across time zones" }
beforeAfter:
  - { area: "Scope", before: "90 screens estimated", after: "324 screens mapped, including popups and half-sheets" }
  - { area: "Requirements", before: "One line: support landscape", after: "Every screen flow documented in Confluence, with edge and error cases" }
  - { area: "Design", before: "Portrait-only layouts", after: "Landscape designs reworked with the UI/UX team, with reusable patterns across markets" }
  - { area: "Effort", before: "Manual boilerplate", after: "GitHub Copilot rolled out to the team, saving about 22 days of effort" }
swimlane:
  lanes: ["Client", "Product Owner & BA", "UI/UX team", "iOS & Android teams"]
  steps:
    - { lane: 0, label: "Asks for landscape support, estimated at 90 screens", short: "Asks: 90 screens" }
    - { lane: 1, label: "Walks every journey screen by screen", short: "Walks journeys" }
    - { lane: 1, label: "Maps 324 screens, including popups and half-sheets", short: "Finds 324 screens" }
    - { lane: 1, label: "Documents every flow with edge and error cases in Confluence", short: "Documents flows" }
    - { lane: 2, label: "Reworks layouts with reusable landscape patterns", short: "Reworks designs" }
    - { lane: 3, label: "Builds each sprint, with GitHub Copilot cutting boilerplate", short: "Builds sprints" }
    - { lane: 0, label: "Sees a demo every sprint", short: "Sprint demo" }
    - { lane: 3, label: "Ships all 324 screens across five markets", short: "Ships 5 markets" }
---

## The problem

The app was live in five markets and portrait-only. The client wanted landscape support on a fixed timeline, and their estimate was 90 screens. Any regression would hit real customers.

## Finding the real scope

Before committing to a plan I walked through every journey on the app, screen by screen. Counting popups, half-sheets and small states as well as full screens, the real number was 324, more than three times the estimate. I documented every screen flow in Confluence so the client, market leads and developers were all looking at the same map.

## What I did

- Ran requirement sessions with market leads and the client, and did impact analysis per screen and business rule so existing logic stayed untouched.
- Worked with the UI/UX team to redesign layouts for landscape, and gave developers the user journey, edge cases and error cases for each screen.
- Owned 21 epics, about 400 user stories and around 1,200 test cases for a 28-developer team spread across time zones.
- Demoed progress to the client every sprint along with the next sprint's plan.
- Checked the work against EU accessibility and Google Play requirements, and helped developers chase down issues such as redundant API calls and memory leaks.

## Outcome

All 324 screens shipped across five markets on iOS and Android without a platform rebuild. Finding the true scope early is what made the deadline believable.
