Plan: Build Advocate Website and Appointment Management System for Mustak Bohari

Summary
Build a six-page professional advocate website with appointment booking backed by Lovable Cloud. Use a classic navy-and-gold trustworthy legal aesthetic, semantic design tokens, and proper TanStack routes.

Architecture and routes
- Shared chrome: update `src/routes/__root.tsx` with a fixed top navigation and footer that appear on every page.
- Six leaf routes under `src/routes/`:
  - `index.tsx` -> `/` (Home / hero + highlights + quick CTA)
  - `about.tsx` -> `/about` (Advocate profile, qualifications, experience, achievements)
  - `services.tsx` -> `/services` (Criminal law and family law service detail)
  - `appointment.tsx` -> `/appointment` (Online appointment booking form)
  - `fees.tsx` -> `/fees` (Transparent consultation fee structure)
  - `contact.tsx` -> `/contact` (Office address, phone, email, enquiry form)
- Add `src/routes/sitemap[.]xml.ts` and update `public/robots.txt` for SEO.
- Navigation links use `<Link>` to each route.

Design system
- Theme: classic navy and gold.
- Define tokens in `src/styles.css` with `oklch` values:
  - Navy primary: `--primary`, `--navy`, `--navy-light`
  - Gold accent: `--accent`, `--gold`
  - Warm paper background for trust/credibility
- Load a suitable legal-style web font (Libre Baskerville + IBM Plex Sans) via `<link>` in `__root.tsx`.
- Add shadcn-style custom variants (e.g. `variant="nav"`, `variant="gold"`) only where needed, using the semantic tokens.
- Avoid hardcoded color classes like `text-white` or `bg-[#...]`.

Content
- Advocate name: Mustak Bohari.
- Practice areas: Criminal law and Family law (per user answer).
- Fees: define realistic transparent tiers for consultation, case review, etc.
- Contact: full office details including phone, email, address, and map directions placeholder.
- About: placeholder biography, education, bar association memberships, years of experience, achievements.
- Legal Services: cards for each practice area with descriptions and common case types.
- Home: hero with firm name, tagline, CTAs to appointment and services, trust highlights, office hours.

Appointment booking backend
- Enable Lovable Cloud first (required for data persistence).
- Create a public `appointments` table in a migration:
  - `id`, `created_at`, `name`, `email`, `phone`, `service_type`, `preferred_date`, `preferred_time`, `notes`, `status` (pending/confirmed/cancelled)
  - Include GRANT statements for `authenticated` and `service_role`.
  - Enable RLS with a policy allowing authenticated inserts (or anon insert for public booking; user explicitly wants public booking).
- Create a server function `src/lib/appointments.functions.ts` that inserts a new appointment.
- Build the booking form using `react-hook-form` + Zod validation, calling the server function on submit.
- Show success feedback after submission.

SEO and metadata
- Each leaf route defines `head()` with unique title, description, og:title, og:description, og:type, twitter:card.
- No `og:image` unless a generated hero image is ready.
- Update `__root.tsx` meta only for shared viewport/charset/favicon; remove generic "Lovable App" title/description.

Images
- Generate one hero image for the home page: a professional courtroom/legal office scene with navy and gold tones, saved to `src/assets/hero-legal.jpg`.
- Use `import` in the home route. No placeholder images remain.

Verification
- Run the dev build (`vite build` or `bun run build`) to confirm routes and server functions compile.
- Check the live preview for navigation, form validation, and responsive layout.

Out of scope (future enhancements)
- Admin dashboard, authentication, payment gateway, SMS/email alerts, document upload, video consultation, case tracking, multi-advocate support.