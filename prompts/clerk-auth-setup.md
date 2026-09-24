# Implementation Prompt: Clerk Authentication Setup

## Goal
Set up Clerk authentication in the existing Vertex Next.js App Router project using the Clerk CLI, linked specifically to application `app_3Jb4AGiOavv3slfRSHTbhgeLn0q`. Make sign-in, sign-up, and signed-in account controls visible in the existing home-page navigation.

## Skills and guidance read
- `clerk-cli`: use the authenticated Clerk CLI for initialization and `doctor`; keep credentials and keys private.
- `clerk` router and `clerk-setup`: use `@clerk/nextjs`, place `ClerkProvider` inside `<body>`, and use the current CLI setup path.
- Repository `AGENTS.md`: preserve Vertex architecture, keep environment secrets server-side, and run relevant workspace checks.

## Code and configuration inspected
- Root `package.json`: Next.js `16.3.5`, React `19.2.8`, npm lockfile; no Clerk SDK installed yet.
- `app/layout.tsx`: root layout with `<html>` and `<body>`, no Clerk provider.
- `app/page.tsx`: existing Vertex catalog landing page, with placeholder profile avatar in the header.
- `app/globals.css`: existing custom navigation and avatar styles.
- Root listing: no root `proxy.ts`, `middleware.ts`, or `components.json` found.
- Environment file contents were not read.

## Decisions and assumptions
- This is an existing Next.js 16 app, so let `clerk init` detect the framework and npm package manager; do not supply framework/package-manager overrides.
- Use the exact Clerk app ID supplied by the user.
- Keep all routes public unless an existing feature explicitly requires protection; this setup adds account controls but does not invent protected areas.
- Do not expose or print `CLERK_SECRET_KEY`. Let the CLI manage `.env.local`; do not read or echo that file.
- No shadcn configuration exists at the root, so do not add `@clerk/ui` or a shadcn theme.
- Add the `'/__clerk/:path*'` matcher after the API/TRPC matcher if the generated Next.js proxy configuration contains one and it is missing.

## Expected files to touch
- `package.json` and `package-lock.json` (Clerk SDK dependency from CLI).
- `app/layout.tsx` (provider in body).
- Root `proxy.ts` (or the CLI-generated Next.js 16 equivalent) for Clerk request handling and matcher.
- `app/page.tsx` and possibly `app/globals.css` for visible auth controls that fit the current header.
- `.env.local` created or updated by Clerk CLI (secret; do not inspect or commit).

## Requirements
1. Run `clerk init --app app_3Jb4AGiOavv3slfRSHTbhgeLn0q` in the repo root after approval.
2. Preserve existing page content and styling while replacing the fake avatar with clear signed-out sign-in/sign-up controls and a signed-in `UserButton` (use `Show`, `SignInButton`, `SignUpButton`, and `UserButton` from `@clerk/nextjs`).
3. Keep `<ClerkProvider>` inside `<body>`.
4. Keep browsing public; do not add unrelated route protection.
5. Ensure the Next.js proxy matcher includes `'/__clerk/:path*'` exactly once, after `'/(api|trpc)(.*)'` where applicable.
6. Never place the Clerk secret key in client code, source, logs, or this prompt.

## Security considerations
- Only publishable configuration can be exposed to the browser.
- Keep `.env.local` ignored; never print or read existing environment files.
- Do not enable auth-required behavior on the public catalog without a product requirement.

## Acceptance criteria
- The project is linked to the supplied Clerk app ID.
- Clerk SDK and provider are installed/configured in the Next.js app.
- The existing Vertex header shows sign-in and sign-up controls when signed out and `UserButton` when signed in.
- Proxy matcher is correct for Next.js 16.
- `clerk doctor --json` reports no Clerk integration failures after initialization.
- Project lint and production build complete successfully.

## Checks
- Run `clerk doctor --json` and report the actual result.
- Run `npm run lint`.
- Run `npm run build`.
- Start `npm run dev` and inspect the visible auth controls without exposing environment values.

## Manual test steps
1. Start the app with `npm run dev`.
2. Open the home page while signed out and confirm Sign in and Sign up are visible in the header.
3. Use Sign up to create or enter the first test account and complete Clerk verification.
4. Return to the home page and confirm the signed-in `UserButton` appears.
5. Sign out from the user menu and confirm the signed-out controls return.
