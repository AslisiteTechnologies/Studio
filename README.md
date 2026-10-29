# Ananta Atelier — portfolio concept

A responsive architecture studio website concept commissioned as a portfolio piece for Aslisite Technologies. The fictional studio, people, project descriptions, locations, years, and recognition content are demonstration material. All project imagery is illustrative photography and does not depict work by Ananta Atelier.

## Creative direction

**Ananta Atelier** is an imagined independent practice in Kochi, Kerala. Its point of view is “Architecture, in dialogue with place.” Warm mineral neutrals, a restrained bronze accent, Playfair Display and DM Sans, and large-format illustrative photography create an editorial identity grounded in the regional landscape. The experience uses generous whitespace and quiet motion so project storytelling stays in focus.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm test
npm run build
```

## Deploy

The static site builds to `dist/` with `npm run build`.

### Vercel

Import the repository, use `npm run build` as the build command and `dist` as the output directory. `vercel.json` rewrites deep links to the SPA entry point.

### Cloudflare Pages

Connect the repository, use `npm run build` and set the output directory to `dist`. `public/_redirects` supplies SPA fallback routing.

The intended demo host is `architecture.demo.aslisite.com`; application routes do not depend on this hostname. Update `public/sitemap.xml` and the sitemap host in `public/robots.txt` if deploying elsewhere.

## Routes

- `/` — home
- `/projects` and `/projects/:slug` — filterable portfolio and 12 concept case studies
- `/services/residential`, `/services/hospitality`, `/services/commercial`, `/services/interior`
- `/studio`, `/process`, `/journal`, `/journal/:slug`, `/recognition`
- `/start-a-project`, `/contact`, `/privacy`, `/terms`
- unmatched routes render the custom 404 page

## Functional notes

Project filters and search are client-side. Case study galleries open a keyboard-accessible lightbox (Escape and arrow keys). The inquiry form validates required fields and email format, then shows a demo confirmation. No inquiry content is transmitted or stored. There is no backend, analytics, or authentication.

## Limitations

Illustrative images are loaded from Unsplash and fonts from Google Fonts, so these visual assets need network access. Confirm image usage/licensing and replace with commissioned or appropriately licensed project visualizations before public commercial deployment. No live deployment was performed because hosting access was not provided.
