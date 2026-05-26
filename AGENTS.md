# belenoc-portfolio — AGENTS.md

## Stack
- **Next.js 16.2.6** (App Router, `output: "export"`), **React 19.2.6**, **TypeScript 6.0.3**, **Tailwind CSS 4.3.0**
- **Framer Motion** 12.40.0 (animations), **Zustand** 5.0.13 (state), **react-icons**
- `@/` → `./src/*` (tsconfig path alias)

## Commands
| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server on `localhost:3000` |
| `npm run build` | Full build (TypeScript + ESLint + static export) |
| `npm run lint` | ESLint via flat config (`eslint.config.mjs`) |
| `npm run deploy` | Publish `out/` to GitHub Pages via `gh-pages` |

## Notable conventions
- **Static export**: `next.config.mjs` has `output: 'export'` and `images.unoptimized: true` — no server runtime, no `next/image` optimization.
- **Dependencies kept minimal**: No `uuid` (`crypto.randomUUID()`), no `@uidotdev/usehooks` (CSS `group-hover` instead of `useHover`), no `animate.css` (Framer Motion instead).
- **Dark mode**: Manual toggle via `ThemeProvider` (React context + localStorage + `dark` class on `<html>`). FOUC prevention via inline script in `layout.tsx`. Toggle buttons in `Header.tsx`.
- **i18n**: `useTranslation` hook reads `en.json` / `es.json` via `useTranslateStore` (Zustand + `persist` middleware, SSR-safe). All components use `t("path.to.key")`.
- **Tailwind v4**: CSS-first config via `@import "tailwindcss"` + `@theme` block in `globals.css`. Colors (`pdark`, `plight`, `sblue`, `sgreen`, `raisin-black`, etc.) defined as CSS custom properties. No `tailwind.config.ts`. Dark mode via `@custom-variant dark`.
- **Component structure**: `src/components/{layout,sections,ui}/`, icons in `src/icons/`. All section components are `"use client"`.
- **Types** in `src/shared/models/global.interfaces.ts`; **data** (Experiences, Projects, DevTools) in `src/shared/utils/global-utils.ts`.
- **Experiences ordered by recency**: Twilio (current), Simetrik, Instaleap (×2), Tory-Tech, APG-Consulting.
- **Profile data** in `src/assets/profile.md` (source of truth for CV info).
- No tests exist in the repo.
- **ESLint**: Flat config (`eslint.config.mjs`) with `@next/eslint-plugin-next/core-web-vitals`, ESLint 9.39.4.
- **Node**: `"type": "module"` in `package.json`.
