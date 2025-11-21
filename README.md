# Colucci Law Firm - Next.js Version

This project is an automated migration of your existing React (Vite) single-page application
into a Next.js App Router project with Tailwind CSS.

## What's been done

- Created a new **Next.js 14 App Router** structure in the `app/` directory.
- Wrapped your existing `App.tsx` inside `app/page.tsx` so the UI behaves exactly like before.
- Copied all your components (`components/`), types (`types.ts`), and content (`constants.ts`).
- Added Tailwind CSS with the same brand colors you configured in `index.html`.
- Added a minimal `next.config.mjs`, `tailwind.config.cjs`, and `postcss.config.cjs`.

Your original Vite entry files `index.tsx` and `index.html` are kept at the root for reference,
but **Next.js does not use them**.

## How to use

1. Install dependencies:

   ```bash
   npm install
   ```

   The first time you run `next dev`, Next.js will detect TypeScript files and
   may prompt you to install `typescript`, `@types/react`, and `@types/node`.
   Follow the instructions it prints (run the suggested `npm install --save-dev ...` command).

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser.

## Next steps / improvements

- Move sections like `Hero`, `Attorney`, `PracticeAreas`, etc. into separate routes or
  server components if you want full SEO/SSR benefits.
- Add proper `<head>` metadata per page using Next.js `metadata` or `generateMetadata`.
- Gradually replace the `App` wrapper with a more "native" Next.js page structure.

