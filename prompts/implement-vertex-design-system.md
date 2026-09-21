# Implement Vertex Design System

## Goal

Replace the default Next.js starter screen with a responsive, production-quality implementation of the provided `design/vertex-designsystem.png` reference. The page is a visual design-system specimen for Vertex: brand intro, color tokens, typography, type scale, spacing, radius/shadows, icons, buttons, inputs, badges, statuses, progress, cards, navigation, and principles.

## Skills and guidance read

- `AGENTS.md` — required workflow, UI fidelity, Next.js boundaries, and checks.
- `architect/SKILL.md` — inspect first, resolve meaningful implementation decisions, document a blueprint before coding.
- `review/SKILL.md` — verify plan alignment, system integrity, and production readiness after implementation.
- Next.js local App Router guidance under `node_modules/next/dist/docs/` — use the current App Router page/layout conventions and keep the implementation compatible with Next 16.

## Existing code inspected

- `app/page.tsx` is the untouched create-next-app starter page.
- `app/globals.css` only imports Tailwind v4 and has starter theme variables plus a dark-mode media override.
- `app/layout.tsx` uses `next/font/google` Geist fonts and starter metadata.
- `package.json` contains Next 16.3.5, React 19.2.8, Tailwind 4, TypeScript, and ESLint; no icon library or image assets are installed.
- `design/vertex-designsystem.png` is the visual source of truth.

## Decisions and assumptions

- Implement the reference as the home route (`app/page.tsx`) because no route was specified and the starter home route is the only existing screen.
- Use semantic HTML, CSS variables, Tailwind utility classes, and small local React components in `app/page.tsx`/`app/globals.css`; do not add a component library or extra dependency for a static specimen page.
- Recreate the logo and interface icons with inline SVG/local markup so the page has no external asset or network dependency. Use CSS gradients/solid swatches for token samples and CSS-only shadows/radii.
- Match the reference’s warm off-white canvas, white bordered panels, orange accent, dark navy neutrals, Playfair-like display typography, and Inter-like UI typography as closely as the available local/runtime fonts allow. Keep existing Geist as a reliable fallback and add font-family stacks in CSS rather than adding a dependency.
- The page is presentational. Buttons, inputs, select, navigation, and pagination are rendered as visual states; no backend, routing, authentication, analytics, or content model work is in scope.
- Desktop fidelity is the primary reference target. On smaller widths, panels stack, dense specimen rows wrap or scroll safely, and the navigation row compresses without losing content.

## Expected files

- `app/page.tsx` — page sections and reusable local specimen components/data.
- `app/globals.css` — design tokens, font stacks, global canvas/panel styling, and responsive refinements.
- `app/layout.tsx` — metadata/title update if needed for the design-system route.

## Requirements

1. Render all reference sections in order with visible section numbers and labels:
   - intro/brand and colors
   - typography and type scale
   - spacing system and radius/shadows
   - icons, buttons, inputs
   - badges/tags, status/indicators, progress bar
   - course/lesson/resource cards
   - navigation/breadcrumbs/pagination
   - principles
2. Use the exact color values and token labels shown in the reference where readable, including primary `#F97316`, `#FB923C`, `#FDBA74`, `#FED7AA`, `#FFF7ED`; neutral scale from `#0F172A` through white; and the orange/green/indigo status accents.
3. Use accessible labels and roles for inputs, select, buttons, links, and decorative SVGs. Maintain visible focus states.
4. Ensure the design remains usable at narrow viewport widths: no page-level horizontal overflow; dense token/table rows may use contained horizontal scrolling only where necessary.
5. Keep repeated content data-driven where practical (swatches, type scale, spacing, buttons, cards, principles) to avoid inconsistent markup.
6. Preserve Next 16 compatibility and avoid deprecated APIs.

## Security and architecture

- No secrets, external requests, client-side tokens, or server mutations.
- Keep this as a server-rendered presentational page unless interactivity is required; do not introduce a client boundary unnecessarily.
- Do not add unrelated Vertex platform features.

## Acceptance criteria

- The home route visually matches the provided reference in hierarchy, content density, colors, spacing, borders, radii, shadows, typography, and component states.
- All thirteen numbered design-system sections are represented, including the four principles at the bottom.
- Page is responsive and has no viewport-level horizontal scrolling on mobile-sized widths.
- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- `npm run build` passes because the route and global styling are changed.
- Manual browser check confirms the rendered page loads without console errors and the narrow layout remains readable.

## Checks to run

From the repository root:

1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`
4. `npm run dev`

## Manual test steps

1. Open the local home route in a browser.
2. Compare the desktop render against `design/vertex-designsystem.png`, checking panel order, token labels, component states, cards, navigation, and principles.
3. Resize to a narrow mobile viewport and confirm the page remains readable with no page-level horizontal overflow.
4. Tab through interactive controls and confirm focus is visible and labels are present.
5. Check the browser console for errors or warnings.
