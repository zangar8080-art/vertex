# Implement the Vertex home page

## Goal

Replace the current root route's design-system specimen sheet with a responsive implementation of `design/vertex-home.png`, the supplied Vertex learning-platform home page reference.

## Guidance and skills read

- `AGENTS.md` — required prompt-and-approval workflow, screenshot fidelity, project scope, and checks.
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md` — the current Next 16 App Router page convention; pages are Server Components by default.
- `computer-use` skill — reviewed, but Windows UI automation is not needed for this code implementation.

## Existing code inspected

- `app/page.tsx` currently contains a design-system reference sheet with inline SVG icons and sample data.
- `app/globals.css` contains its global typography, warm canvas, card/button styling, and responsive rules.
- `app/layout.tsx` uses Next's Geist fonts and design-system metadata.
- `package.json` uses Next 16.3.5, React 19.2.8, Tailwind 4, TypeScript, and ESLint; there is no icon package or application content backend configured.
- `design/vertex-home.png` is the visual source of truth. No matching profile/course image assets exist under `public/`.

## Decisions and assumptions

- Implement the supplied screen at `/`, replacing the current specimen page.
- Keep this presentational and server-rendered. The search field is an accessible visual input only; do not invent a search API, routes, auth, analytics, or data integration.
- Use the three course titles/descriptions and metadata visible in the screenshot. Draw simple course marks and the Vertex mark using inline SVG or text, and use a neutral avatar treatment because the repository has no corresponding assets.
- Use inline SVG for the bell, search, arrow, and course metadata icons; do not add dependencies.
- Reuse the existing warm neutral canvas, fine peach borders, orange accent, dark text, and serif display headings where they match the reference. Update the page metadata to identify Vertex learning.
- Preserve the desktop screenshot composition: horizontal header, spacious centered hero and search field, three-column course cards, then the centered weekly-update note and understated decorative footer. At mobile widths, wrap/collapse navigation and stack cards while preserving hierarchy and spacing.

## Expected files

- `app/page.tsx` — semantic page structure, small local SVG/icon components, and screenshot-matched course data.
- `app/globals.css` — landing-page styles and responsive breakpoints, replacing obsolete specimen-sheet styling.
- `app/layout.tsx` — title and description metadata for the Vertex learning home page.

## Requirements

1. Recreate the visible header with Vertex branding, Courses and My Learning links, a notification bell, and profile treatment.
2. Recreate the hero label, two-line serif headline, supporting copy, orange Explore Courses action, and wide accessible search input with keyboard hint.
3. Show the All Courses heading and View all courses action, then the three reference courses with their matching title, summary, level, duration, and module count.
4. Add the thin orange/peach decorative footer bars and the star/update statement visible below the cards.
5. Match the reference's centered content width, cream background, subtle borders, restrained shadows, icon scale, typography, whitespace, and orange/gray palette. Do not introduce unrelated sections or extra copy.
6. Keep semantic landmarks, useful link targets, accessible names for icon-only controls, visible keyboard focus, and no horizontal overflow at narrow widths.
7. Keep implementation local to the root route and shared global layout; do not add libraries or back-end behavior.

## Security considerations

- This static page makes no network calls, exposes no credentials, and sends no learner data. The search field must not imply a working service that is not present.

## Acceptance criteria

- `/` matches the supplied desktop reference in content order, proportions, palette, and typography.
- At tablet/mobile widths the header remains usable and course cards stack without clipping.
- The root page and layout contain no design-system specimen sections or mojibake glyphs.
- Type check, lint, and production build complete successfully.

## Checks

- Run `npx tsc --noEmit` from the repository root.
- Run `npm run lint` from the repository root.
- Run `npm run build` from the repository root.
- Start `npm run dev` and visually inspect `/` at desktop and mobile viewport sizes.

## Manual test steps

1. Start the app with `npm run dev` and open `http://localhost:3000/`.
2. Compare the desktop page against `design/vertex-home.png`: header, hero, search, course row, and footer should align in sequence and style.
3. Tab through header links, controls, and search to confirm focus visibility and readable names.
4. Resize to a narrow phone width; verify cards stack, navigation stays usable, and no horizontal page scrolling appears.
