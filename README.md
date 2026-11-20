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

## Deploy to SmarterASP.NET

Deployment is automatic: every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to SmarterASP.NET over FTPS using lftp. Old build files in `assets/` are removed; nothing else on the server is deleted. You can also run it by hand from the repo's **Actions** tab.

Required GitHub repo secrets (Settings → Secrets and variables → Actions):

- `FTP_HOST` – FTP host from the SmarterASP control panel (e.g. `winXXXX.site4now.net`)
- `FTP_USERNAME` (or `FTP_USER`) / `FTP_PASSWORD` – the site's FTP account
- `VITE_FORMSPREE_ID` – optional, enables the contact form

Optional repo variable `FTP_SERVER_DIR` if the FTP login doesn't land in the site root (e.g. `/site1/`). Defaults to `./`.
