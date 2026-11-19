---
title: "AI ordering assistant"
headline: "An AI that takes orders by voice and text, rebuilt when the first version fell short."
tagline: "Product Owner and BA for a conversational ordering assistant for a global QSR brand, redesigned from a native agent into a multi-agent REST API grounded in the live menu."
kind: enterprise
featured: true
company: "Capgemini · global QSR brand"
role: "Product Owner & Business Analyst"
period: "May 2026 – Sep 2026"
status: Client work
order: 4
tags: [Generative AI, Multi-agent, Voice]
problem: "Customers should be able to order by talking or typing, with the assistant replying in text and voice. The first version, an agent built natively on each platform, was slow, misread prompts and sometimes suggested products unrelated to the request."
outcome: "The assistant was redesigned as a single REST API where a main agent hands work to cart, recommendation and order agents. The model fills a fixed query schema that runs against the menu database, so it can only return items that exist."
stages: [Discover, Understand, Define, Ideate, Prototype, Build]
stack: [Gemini Live, RAG, Vector database, REST, WebSocket, Postman, Power BI]
metrics:
  - { value: "1", label: "REST API replacing per-platform agents" }
  - { value: "3", label: "sub-agents: cart, recommendation, order" }
  - { value: "< 2 min", label: "goal to order and pay" }
flow:
  - { title: "Customer speaks or types", body: "\"Two burgers, no onions, and something cold.\"" }
  - { title: "Main agent", body: "Understands the request and hands each part to the right sub-agent." }
  - { title: "Schema, not guesswork", body: "The model fills a fixed query schema; the database returns real menu items." }
  - { title: "Reply in text and voice", body: "The answer streams back, with a fallback if the item isn't available." }
swimlane:
  lanes: ["Customer", "Main agent", "Cart, recommendation and order agents", "Menu database"]
  steps:
    - { lane: 0, label: "Speaks or types an order", short: "Speaks or types" }
    - { lane: 1, label: "Understands the request", short: "Understands" }
    - { lane: 1, label: "Hands each part to the right sub-agent", short: "Delegates" }
    - { lane: 2, label: "Fills a fixed query schema", short: "Fills schema" }
    - { lane: 3, label: "Returns only items that exist on the menu", short: "Real items only" }
    - { lane: 2, label: "Updates the cart or suggests items", short: "Cart or suggest" }
    - { lane: 1, label: "Streams the reply, with a fallback if an item isn't available", short: "Streams reply" }
    - { lane: 0, label: "Gets the answer in text and voice", short: "Text and voice" }
---

## The goal

Let a customer order by voice or text and get answers in both, from choosing items to paying, in under two minutes.

## Version one, and why it fell short

The first approach was an agent written in Kotlin with native screens on Android and iOS. It worked, but not well enough: responses were slow, the model often misread what the customer asked for, and it sometimes suggested products that had nothing to do with the request.

## The redesign

- **One conversational REST API** instead of separate per-platform logic, with a self-describing response format so the app can show new kinds of responses without a new release.
- **Multi-agent orchestration**: a main agent reads each prompt and delegates to cart, recommendation and order sub-agents.
- **Grounded in the live menu**: I defined the menu taxonomy, business rules and a constrained query schema. The model fills the schema from the customer's words, and the schema runs against the vector database to fetch exact products. It cannot invent an item.
- **Edge cases designed up front**: what the assistant says when an item is unavailable, out of stock or ambiguous.
- **Voice in three tiers**: streamed AI speech over WebSocket, pre-recorded clips, and a local fallback, with automatic failover.
- Bias checks, fairness guardrails and a model evaluation and monitoring approach were part of the backlog, not an afterthought.

## How I worked

I prioritised and refined the backlog with engineering, data and UX, wrote the user stories and acceptance criteria, accepted the AI APIs in Postman and tracked capacity and coverage in Power BI.
