# nice'n'easy Corporate Design

This document is the canonical corporate identity and corporate design reference for the niceneasy platform family.

It applies to:

- `niceneasy` public website and business shell
- `fsi-ai-agent` dashboard and backend-facing docs
- `agent-command-center` operator and business cockpit
- `niceneasy-agents` VS Code extension / IDE edge
- `@niceneasy/agent-sdk` TypeScript contracts and examples
- future products such as `asset-sentry`

The dedicated brand repository is `git@github.com:bluebossa63/niceneasy-brand.git`. This file is the source of truth for corporate identity, corporate design, product-family naming, visual rules, and copy voice.

Migration trigger: once `niceneasy-brand` contains reviewed token outputs and basic asset folders, consuming repos must import generated artifacts from this repository instead of copying hex values from this document into product code.

## Brand Positioning

nice'n'easy builds sovereign, auditable AI agent operations for Swiss and regulated teams.

The brand should feel:

- precise, not playful
- approachable, not casual
- technical, not jargon-heavy
- calm, not flashy
- Swiss, not generic global SaaS
- evidence-driven, not hype-driven

Preferred core phrase:

> Sovereign AI agent operations for regulated teams.

Avoid claims that imply regulatory certification unless the product and deployment have evidence for that claim. Use "FSI-oriented", "FINMA-aware", "audit-ready", or "designed for regulated environments" when that is more accurate.

## Product Family

The platform is federated. Do not collapse the products into one visual or architectural blob.

| Product | Role | Design Expression |
|---|---|---|
| `niceneasy` | Public website, business shell, trust surface | calm, editorial, light, explanatory |
| `fsi-ai-agent` | Backend control spine and direct technical dashboard | utilitarian, precise, engineering-first |
| `agent-command-center` | Business/operator workbench | dark cockpit, high-signal, approvals and evidence |
| `niceneasy-agents` | VS Code plugin / IDE edge | compact, theme-aware, developer-native |
| `@niceneasy/agent-sdk` | Shared TypeScript API and event contracts | no visual design; owns names and DTO consistency |
| `niceneasy-brand` | Brand source repo | tokens, marks, assets, usage rules |

Naming note: `operator-deck` is legacy wording from older planning material. The active operator workbench product is `agent-command-center`; do not create a separate product or repo boundary for `operator-deck` unless there is a new explicit architecture decision.

## Visual Direction

Use "Swiss operational trust" as the visual north star.

The design should look like infrastructure that can be audited, not like a toy chatbot.

Recommended motifs:

- grid lines
- compass and meridian lines
- inspection apertures
- signal/radar sweeps
- ledgers and evidence trails
- restrained glass and metal surfaces
- document stamps and approval seals

Avoid:

- cartoon robots as the primary identity
- cyan/violet AI gradients
- neon glows
- generic three-card SaaS sections
- emoji in product UI
- unverified compliance badges

## Color System

The shared palette should use neutral foundations with one primary accent family.

### Core

| Token | Hex | Usage |
|---|---:|---|
| `ink-950` | `#10161F` | dark product backgrounds |
| `ink-900` | `#16212E` | dark elevated surfaces |
| `paper-50` | `#F6F3EA` | public website background |
| `paper-100` | `#ECE5D6` | soft sections, dividers |
| `moss-500` | `#4D7C59` | primary brand accent |
| `moss-300` | `#9BBE9A` | subtle highlights |
| `brass-400` | `#C5A46D` | evidence, audit, metadata |
| `coral-400` | `#C76B5A` | risk, blocked, attention |

### Rules

- Use moss as the primary accent.
- Use coral only for risk, denial, blocked states, or urgent attention.
- Use brass for evidence, cost, audit trails, and metadata.
- Do not use purple or neon blue as brand accents.
- Do not mix warm and cool gray systems on the same surface.

## Typography

Use modern sans-serif typography for all software and dashboard surfaces.

Recommended:

- display / UI: `Geist`, `Satoshi`, or `Avenir Next` where already established
- mono: `JetBrains Mono` for IDs, costs, event streams, logs, and tool output

Avoid:

- `Inter` as the primary brand font
- serif fonts in dashboard or developer tools
- oversized headline shouting

## Layout Principles

Public website:

- asymmetric hero layouts
- calm whitespace
- proof-oriented sections
- fewer cards, more structured narrative bands
- clear routes into product and contact flows

Command Center:

- dark cockpit surface
- evidence-first execution views
- approvals and permissions as primary objects
- line-based grouping over excessive rounded cards
- dense where useful, never cluttered

VS Code plugin:

- follow VS Code theme variables where possible
- compact panels
- low-chrome interaction
- clear keyboard-first actions
- native-feeling notifications for permission requests

## Agent Identity

Agents are operational roles, not mascots.

Each agent should have a restrained mark, color band, and role description.

| Agent | Role | Visual Metaphor |
|---|---|---|
| Meridian | coordination and delivery | compass / meridian axis |
| Codex | engineering execution | brackets / code ledger |
| Cipher | security and compliance | shield / inspection aperture |
| Sentinel | monitoring and quality signals | radar / signal sweep |
| Marketing | content and market communication | broadcast / signal trace |

Do not confuse:

- tool names
- CLI names
- hostnames
- agent personas

Example: `meridian.local` is a host. `Meridian` is an agent persona. `codex` may be both a CLI tool and an agent persona depending on context.

## Copy Voice

Use practitioner language.

Good:

- "Every tool call is logged with evidence."
- "Human approval is required before risky actions."
- "Runs can be replayed from persisted event streams."
- "Designed for regulated environments."

Avoid:

- "Unleash AI"
- "Next-gen autonomous intelligence"
- "Magical agents"
- "Fully FINMA compliant" unless formally proven
- fabricated metrics or customer claims

## Shared TypeScript Boundary

`@niceneasy/agent-sdk` is the shared API and event contract layer for:

- `agent-command-center`
- `niceneasy-agents`
- any future web widgets in `niceneasy`

The SDK should own:

- stream event types
- run replay types
- agent/session/task DTOs
- permission request DTOs
- model/tool metadata DTOs
- API client behavior

The SDK should not own:

- logos
- color tokens
- React components
- brand copy
- VS Code-specific UI behavior

If shared UI becomes necessary, create a separate package such as `@niceneasy/agent-ui` or place it in `niceneasy-brand` after the component contracts stabilize.

## Implementation Order

1. Keep this document current in `niceneasy-brand`.
2. Add generated tokens and assets to `niceneasy-brand`, starting with `tokens/tokens.css`.
3. Consume brand tokens in `niceneasy`.
4. Consume brand tokens in `agent-command-center`.
5. Apply compatible tokens and theme rules in `niceneasy-agents`.
6. Keep `@niceneasy/agent-sdk` focused on API contracts.

## Review Checklist

Before merging a visible UI or marketing change:

- Does it follow the moss/brass/coral/ink palette?
- Does it avoid cyan/violet AI SaaS styling?
- Does it avoid cartoon robots as the primary product identity?
- Does it distinguish public, operator, and IDE surfaces?
- Does it avoid unverified compliance claims?
- Does it keep SDK/API contracts separate from brand assets?
- Does it work without relying on emoji?
- Does it show loading, empty, and error states where relevant?
