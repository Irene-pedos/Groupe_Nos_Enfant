# GEMINI Instructions - Groupe Nos Enfants (GNE) Web Platform

This project is a modern web application for **Groupe Nos Enfants (GNE)**, an NGO based in Rwanda focused on peacebuilding, reconciliation, and empowering vulnerable youth and children.

## Project Overview
The goal is to build a high-impact, trustworthy, and accessible platform to showcase GNE's mission, programs, and impact, while facilitating donations, volunteering, and support applications.

### Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **I18n:** English and French support (structured JSON files)

## Building and Running
*TODO: Add specific commands once the Next.js project is initialized (e.g., `npm run dev`, `npm run build`).*

## Development Conventions

### Architecture
- Follow the **Next.js App Router** conventions.
- Use **Server Components** by default; use `'use client'` only when interactivity is required.
- Maintain a clean separation between UI components (`/components`) and logic (`/lib`, `/hooks`).

### UI & Design
- Adhere to the **NGO Style** (Warm, Human, Trustworthy).
- Primary Color: Deep Blue; Secondary: Warm Orange.
- Use **shadcn/ui** components exclusively before considering custom ones.
- **Accessibility:** Ensure high contrast and clear navigation.

### Content & Internationalization
- **No hardcoded text:** All strings must come from translation files in `/translations`.
- Use **Emotional Storytelling** and real impact examples.

## Project Structure
The project is organized into a monorepo-style structure:
- **/frontend**: Contains the Next.js application, UI components, and frontend-specific documentation.
- **/backend**: Reserved for future backend development.
- **/Project Description**: Legacy documentation and requirements.
- **/docs**: (Refer to `frontend/docs` for technical specifications).

## Key Project Files
- **PROJECT_CONTEXT.md**: Core NGO mission, vision, and principles (Root).
- **frontend/docs/**: Contains all technical and design specifications:
    - `TECH_STACK.md`
    - `DESIGN_SYSTEM.md`
    - `ROUTES_STRUCTURE.md`
    - `CONTENT_STRUCTURE.md`
    - `SHADCN_SETUP.md`
    - ...and other guidelines.

## Folder Structure (Frontend)
/frontend
  /app           # Next.js App Router
    /(public)    # Public facing routes
    /(admin)     # Admin dashboard (future)
  /components    # Reusable shadcn and custom components
  /lib           # Utility functions
  /hooks         # Custom React hooks
  /translations  # JSON files for i18n
  /docs          # Technical documentation
