# AI Agent Instructions for nextjs-multilang-redux

## Project Overview
This is a Next.js 16 + React 19 application with Tailwind CSS v4, designed to support multi-language UI and Redux state management. Currently in early stages, with only the default create-next-app boilerplate structure in place.

**Tech Stack:**
- **Frontend:** Next.js 16 (App Router), React 19, TypeScript 5
- **Styling:** Tailwind CSS v4 (via PostCSS plugin)
- **Code Quality:** ESLint 9 with Next.js config
- **Path Alias:** `@/*` resolves to workspace root for imports

## Critical Development Patterns

### Build & Dev Commands
```bash
npm run dev      # Start dev server on http://localhost:3000 (auto-reload)
npm run build    # Production build (required before `npm start`)
npm start        # Run production build locally
npm run lint     # Run ESLint on all files
```

### Project Structure - Expected Architecture
```
app/
  ├── layout.tsx          # Root layout with RootLayout wrapper
  ├── page.tsx            # Home page (edit to customize)
  ├── globals.css         # Global Tailwind styles
  └── favicon.ico
next.config.ts            # Next.js configuration (minimal by default)
tsconfig.json             # TypeScript config with `@/*` alias
```

### File Naming & TypeScript Conventions
- **Client Components:** Add `"use client"` at top of `.tsx` files that use React hooks or browser APIs
- **Server Components:** Use by default in App Router (no directive needed)
- **Type Exports:** Use `export type` for TypeScript-only exports to enable tree-shaking
- **Metadata:** Define in `layout.tsx` using Next.js `Metadata` type (see `app/layout.tsx` example)

### Styling with Tailwind CSS v4
- Use **v4 atomic utility classes** for components (no CSS-in-JS preferred)
- PostCSS plugin (`@tailwindcss/postcss`) handles CSS generation
- Global styles in `app/globals.css` (e.g., `@layer`, `@theme` directives)
- No Tailwind config file needed; v4 uses modern CSS defaults

### Linting & Code Quality
- ESLint configuration uses `eslint/config` (flat config format, not `.eslintrc`)
- Extends `eslint-config-next/core-web-vitals` + `/typescript`
- `.next/` and `next-env.d.ts` are ignored
- Run `npm run lint` before committing; fix with `--fix` flag if needed

## Redux & i18n Integration (Planned)
**Not yet implemented.** When adding:

1. **Redux:** Consider `@reduxjs/toolkit` + `react-redux`
   - Store typically in `lib/store` or `app/store.tsx` (Provider wrapper)
   - Slices in `lib/slices/` (e.g., `languageSlice.ts`)
   - Wrap root layout with Redux provider before rendering children

2. **Multi-language Support:** Consider `i18next` + `next-i18next` or `next-intl`
   - Translations stored in `public/locales/[lang]/` (e.g., `en.json`, `tr.json`)
   - Language code in URL segment or cookie/localStorage
   - Update `next.config.ts` with i18n configuration if needed

## Key Integration Points
- **Layout Hydration:** Redux Provider + i18n Provider wrap children in `app/layout.tsx`
- **Type Safety:** Preserve TypeScript strict mode; use `as const` for language/theme options
- **Path Aliases:** Use `@/lib/store`, `@/slices/` for clean imports
- **Next.js Features:** Leverage Server Components for data fetching; use `"use client"` only where React interactivity needed

## Common Tasks
- **Add a new page:** Create `app/[slug]/page.tsx` in App Router structure
- **Debug build issues:** Check `next.config.ts` and `.next/` folder; clear with `npm run build` after config changes
- **Fix TypeScript errors:** Verify types in `tsconfig.json` and check `@types/` packages in `package.json`

## Project Repositories & Documentation
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS v4:** https://tailwindcss.com/docs
- **ESLint Config:** See `eslint.config.mjs` (flat config format)
