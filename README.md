# Safdar Portfolio

Personal portfolio site for Safdar Ali, built with Next.js App Router.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- Next Themes (dark/light mode)
- Vercel Analytics + Speed Insights

## Project Structure

```txt
app/
  page.js                # Homepage route
  about/page.jsx         # About page
  blog/page.jsx          # Blog/articles page
  projects/page.jsx      # Projects and case studies
  contact/page.jsx       # Contact page
  skills/page.jsx        # Skills page
  layout.js              # Global layout + metadata + analytics
components/
  HomePage.jsx
  Navbar.jsx
  Footer.jsx
  Contact.jsx
  about/
    MediaSlot.jsx
    WhereImBasedSection.jsx
data/
  featured-projects.js
  blog-posts.js
lib/
  site.js                # Shared constants (email/mailto)
public/
  about/                 # About page images/videos
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```txt
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run about:images` - optimize about-page image assets

## SEO and Metadata

- Global metadata and JSON-LD live in `app/layout.js`
- Route-level metadata is defined per page (for example `app/about/page.jsx`)
- Open Graph image route: `app/opengraph-image.jsx`
- Sitemap route: `app/sitemap.ts`

## Analytics

Enabled in `app/layout.js`:

- `@vercel/analytics` (`<Analytics />`)
- `@vercel/speed-insights` (`<SpeedInsights />`)

## Content Editing Guide

- Homepage content/cards: `components/HomePage.jsx`
- Footer rotating quotes: `components/Footer.jsx`
- About page copy/layout: `app/about/page.jsx`
- About media components (video/image slots): `components/about/MediaSlot.jsx`
- Projects shown on homepage: `data/featured-projects.js`
- Blog article list: `data/blog-posts.js`

## Media Notes (About Page)

- Place images/videos in `public/about/`
- Keep video files compressed for fast loading
- If a video fails, `MediaSlot` shows a friendly fallback message

## Contact

Contact constants live in `lib/site.js`:

- `CONTACT_EMAIL`
- `MAILTO_HREF`

The form action endpoint is configured in `components/Contact.jsx`.

## Deploy

Recommended: deploy on Vercel.

```bash
npm run build
```

Then connect the repo to Vercel and deploy.
