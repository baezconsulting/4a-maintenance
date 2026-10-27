# AAAA Maintenance website

React + Vite + Tailwind CSS + Motion. Static site, no database.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit content

All business details, services and photos are in `src/site.js`.

- **Photos:** the site ships with illustrations in `public/photos/`. To use real project photos, add them to that folder and change each `src` (for example `'/photos/bath-1.jpg'`).
- **Placeholders to fill:** `[EMAIL]`, `[SERVICE AREA]`, `[LICENSE #]`.

## Contact form

1. Create a free form at https://formspree.io.
2. Create a `.env` file in the project root containing `VITE_FORMSPREE_ID=your_form_id`.
3. Rebuild.

Without a Formspree ID, the form opens the visitor's email app addressed to the email in `src/site.js`.

## Deploy

```bash
npm run build
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, or a standard web host's public folder).
