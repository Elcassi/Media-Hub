# The Mouthpiece

A cinematic, documentary-style website for The Mouthpiece — a YouTube/Spotify interview platform founded by Otito Diri Chukwu that gives bereaved people a voice through honest conversations about grief, healing, faith, and hope.

## Run & Operate

- `pnpm --filter @workspace/mouthpiece run dev` — run the main website (Vite)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Main site: `artifacts/mouthpiece/` (React + Vite, single-page marketing site at `/`)
- API server: `artifacts/api-server/` (Express, handles story submissions and contact messages)
- DB schema: `lib/db/src/schema/story-submissions.ts`, `lib/db/src/schema/contact-messages.ts`
- API contract: `lib/api-spec/openapi.yaml`

## Architecture decisions

- Only two flows are backend-backed: "Share Your Story" applications and the contact form. Featured stories, testimonials, and YouTube/Spotify listings are static editorial content, not DB-driven — there is no CMS yet.
- YouTube/Spotify links are placeholder constants in the frontend source until the real channel/show URLs are provided.

## Product

- Single-page cinematic site: hero, about, mission, featured stories, "why these stories matter", scripture-inspired section, embedded YouTube section, embedded Spotify section, "Share Your Story" form, testimonials, contact form, footer. Plus standalone `/privacy` and `/terms` pages.
- Visitors can apply to share their story or send a contact message — both persist to the database.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Do not use `format: email` in OpenAPI schemas — the workspace's pinned zod v3 catalog doesn't support the top-level `zod.email()` that Orval generates for that format, and codegen's typecheck step fails. Validate email shape at the application layer instead.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
