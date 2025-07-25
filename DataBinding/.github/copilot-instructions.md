# Copilot Instructions for DataBinding Angular Project

## Project Overview
- This is an Angular project generated with Angular CLI v20.1.1.
- Source code is organized under `src/app/` with feature components in subfolders (e.g., `components/data-binding/`, `DataBindingComponet/event-binding/`).
- Main entry: `src/main.ts`, root HTML: `src/index.html`.

## Key Patterns & Conventions
- **Component Structure:**
  - Each feature (e.g., event-binding, interpolation) has its own folder with `.ts`, `.html`, `.css`, and `.spec.ts` files.
  - Example: `src/app/DataBindingComponet/event-binding/event-binding.ts` (logic), `event-binding.html` (template), `event-binding.css` (styles).
- **Naming:**
  - Folders and files use kebab-case for features, PascalCase for main components.
  - Some folder names (e.g., `DataBindingComponet`) may have typos; match existing names when creating new files.
- **Styling:**
  - Component styles are scoped via their respective `.css` files.
  - Common UI patterns: tables with rounded corners, centered headings (`h3 { text-align: center; }`).

## Developer Workflows
- **Start Dev Server:**
  - `ng serve` or `npm start` (see tasks in VS Code).
- **Run Unit Tests:**
  - `ng test` or `npm test` (Karma runner).
- **Build:**
  - `ng build` (outputs to `dist/`).
- **Generate Components:**
  - `ng generate component <name>` (scaffolds new feature folders/files).

## Integration & Dependencies
- Uses Angular CLI, TypeScript, and Karma for testing.
- No custom backend or API integration detected in the codebase.
- External assets (e.g., favicon) in `public/`.

## Examples
- To add a new feature:
  1. Run `ng generate component feature-name`.
  2. Place logic in `.ts`, template in `.html`, styles in `.css`.
  3. Register routes in `app.routes.ts` if needed.
- To update UI patterns:
  - Center headings: add `h3 { text-align: center; }` to the relevant `.css` file.

## References
- See `README.md` for CLI commands and workflow details.
- Main app config: `src/app/app.config.ts`, routing: `src/app/app.routes.ts`.

---
If any conventions or workflows are unclear, please ask for clarification or provide examples from the codebase for further documentation.
