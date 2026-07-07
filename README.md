# AI Engineer Portfolio

A dark, neural-network-themed portfolio built with Next.js (App Router). Signature piece: an animated, cursor-reactive neural network canvas in the hero.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

Almost everything you need to change lives in one file: **`data/content.js`**

- `profile` — name, role, tagline, email, socials, resume link
- `about` — bio paragraphs and stat numbers
- `skillGroups` — your skills, grouped by category (this is the section you asked to have detailed)
- `projects` — project cards with tags and links
- `experience` — work history timeline

Colors, fonts, and spacing live in `app/globals.css` as CSS variables at the top of the file (`--bg`, `--accent`, `--accent-2`, etc.) if you want to retheme.

## Sections included

Hero · About · Skills & tech stack · Projects · Experience · Contact

Delete any section by removing its component from `app/page.js` — nothing else depends on it.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset "Next.js" is auto-detected — click Deploy.

No environment variables or backend needed; it's fully static/client-rendered.

