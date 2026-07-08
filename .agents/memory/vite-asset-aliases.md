---
name: Vite asset alias confusion (@assets vs @/assets)
description: In this monorepo's react-vite scaffold, @assets/* and @/assets/* point to different directories. Check before wiring up image imports.
---

In the react-vite artifact scaffold, `vite.config.ts` typically defines:
- `@assets` → the top-level `attached_assets/` directory (files the user uploaded/attached to the chat, e.g. logos)
- `@/*` → `./src/*`, so `@/assets/*` → the artifact's own `src/assets/` directory (AI-generated or locally-added images)

**Why:** A DESIGN subagent generated images into `src/assets/` but imported them with `@assets/...`, which silently resolved to the wrong directory and broke the Vite dev server with "Failed to resolve import" errors for every generated image, while logo imports (correctly using `@assets/...` for `attached_assets/`) worked fine.

**How to apply:** When wiring up image imports after a design pass, check literally which directory the image file lives in (`src/assets/` vs `attached_assets/`) and use the alias that maps to it. Don't assume `@assets` covers both.
