# GEMINI Instructions - Groupe Nos Enfants (GNE) Frontend

This project is the frontend for the **Groupe Nos Enfants (GNE)** web platform, an NGO focused on peacebuilding and youth empowerment in Rwanda.

## Project Overview
A modern, accessible, and high-impact web application built to showcase GNE's mission and facilitate community engagement (donations, volunteering, news).

### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI)
- **Fonts:** Figtree (Sans), Inter (Heading), Geist Mono (Mono)
- **I18n:** English and French support via JSON translation files.

## Building and Running
- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run format`: Formats code using Prettier.
- `npm run typecheck`: Runs TypeScript type checks.

## Development Conventions

### Architecture & Routing
- Follow **Next.js App Router** conventions.
- **Server Components:** Use by default for better performance and SEO.
- **Client Components:** Use `'use client'` only when React hooks (state, effects) or browser APIs are required.
- **Route Groups:** Use `(public)` and `(admin)` (planned) to organize routes.

### UI & Styling
- **NGO Style:** Maintain a "Warm, Human, Trustworthy, and Inspiring" tone.
- **Colors:** Primary: Deep Blue; Secondary: Warm Orange.
- **Shadcn/UI:** Use existing shadcn components (found in `components/ui/`) before creating custom ones.
- **Tailwind:** Use utility classes exclusively. Avoid inline styles.
- **Accessibility:** Ensure high contrast, clear navigation, and large clickable areas.

### Internationalization (i18n)
- **No Hardcoded Text:** All user-facing strings MUST be stored in `translations/en.json` or `translations/fr.json`.
- **Language Support:** Default language is English. French support is required.

### Component Guidelines
- **Reusability:** Design components to be isolated and reusable with props.
- **Naming:** Use PascalCase for components (e.g., `HeroSection.tsx`, `ProgramCard.tsx`).
- **Organization:** 
    - Reusable UI primitives go in `components/ui/`.
    - Feature-specific components go in `components/`.

## Key Directories
- `/app`: Application routes and layouts.
- `/components`: UI components (shadcn/ui and custom).
- `/translations`: JSON files for i18n (`en.json`, `fr.json`).
- `/docs`: Technical and design documentation.
- `/lib`: Utility functions and shared logic.
- `/hooks`: Custom React hooks.

## Documentation References
For detailed guidelines, refer to the files in `/docs`:
- `DESIGN_SYSTEM.md`: Visual identity and UI patterns.
- `TECH_STACK.md`: Core technologies and performance rules.
- `I18N_GUIDE.md`: Translation workflows and examples.
- `COMPONENT_GUIDELINES.md`: Component structure and naming.
