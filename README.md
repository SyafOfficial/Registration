# Panther FX Registration

A responsive, static registration landing page for Panther FX, with six introducing broker registration links and Admin Deeyana’s WhatsApp contact. No dependencies or build step required.

## Run locally

From `/workspace/Registration`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the site using your local development environment. Deploy the repository root to a static website host such as GitHub Pages, Netlify, or Cloudflare Pages to get a public HTTPS URL for TikTok. Publishing requires access to your hosting account; no public deployment has been made by this project.

## TikTok bio links

The root URL shows all six brokers. For an individual broker, append one of these to your published website URL:

- `?broker=pablo`
- `?broker=lx`
- `?broker=shen`
- `?broker=aemy`
- `?broker=fuad`
- `?broker=mus`

Each personal URL displays only that broker’s registration button and the shared WhatsApp contact. Invalid broker names fall back to the full list. Broker links remain usable without JavaScript, with the full list as the fallback.

## Update content

Registration destinations and the WhatsApp link are in `index.html`. Appearance is in `style.css`; personal page filtering is in `app.js`. Google Fonts are optional; system fonts work if unavailable.
