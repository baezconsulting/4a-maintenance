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

- **Photos:** the hero and gallery use free Unsplash stock photos in `public/photos/` (credits in `src/site.js`). The gallery is titled "Styles we build" because these aren't your own jobs; when you have real job photos, swap them into `gallery.photos` and change the title to "Recent work".
- **Placeholders to fill:** `[EMAIL]`, `[SERVICE AREA]`, `[LICENSE #]`.

## Contact form

The quote form submits to Formspree (form `xzervlbd`, set in `src/site.js`), which emails each submission to contact@4amaintenance.com. Manage the form, recipient and spam settings at https://formspree.io.

## Deploy to SmarterASP.NET

Deployment is automatic: every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to SmarterASP.NET over FTPS using lftp. Old build files in `assets/` are removed; nothing else on the server is deleted. You can also run it by hand from the repo's **Actions** tab.

Required GitHub repo secrets (Settings → Secrets and variables → Actions):

- `FTP_HOST` – FTP host from the SmarterASP control panel (e.g. `winXXXX.site4now.net`)
- `FTP_USERNAME` (or `FTP_USER`) / `FTP_PASSWORD` – the site's FTP account

Optional repo variable `FTP_SERVER_DIR` if the FTP login doesn't land in the site root (e.g. `/site1/`). Defaults to `./`.
