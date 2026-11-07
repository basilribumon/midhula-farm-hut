# Homepage assets and handoff

## Brand and imagery

The official logo supplied by the user is now used in the navigation, footer and favicon at `public/midhula-farm-hut-logo.jpg`. The profile screenshots informed the fish categories, location, contact details and visual direction. The profile grid is only visible as low-resolution thumbnails in the supplied screenshot, so those thumbnails are not being enlarged or presented as original photography.

## Temporary imagery in the design

The original farm photography and official logo were not supplied. The current visual uses temporary, publicly available Unsplash photographs. Replace these with owner supplied images before presenting this as a documentary view of the farm. No Instagram account was contacted or scraped.

- Orange guppy photograph by Nikhil Thomas: [Unsplash photo](https://unsplash.com/photos/orange-guppy-fish-SrzF87xRwwY).
- Aquarium fish photograph by Diogo Cardoso: [Unsplash photo](https://unsplash.com/photos/a-group-of-fish-swimming-in-an-aquarium-LEw6N9wLQQE).
- Freshwater aquarium photograph by Hanna Lazar: [Unsplash photo](https://unsplash.com/photos/colorful-fish-swimming-in-a-freshwater-aquarium-with-decorative-rocks-06PIZFS8his).
- Orange and red fish school photograph by Andy Wang: [Unsplash photo](https://unsplash.com/photos/a-school-of-vibrant-red-and-orange-fish-swimming-E-NwiV1OinQ).

Unsplash identifies these photos as free to use under the [Unsplash License](https://unsplash.com/license). They are visual references and do not represent verified farm inventory or the farm's actual setup.

## Replace before final client handoff

1. Farm photos: tanks, setup, fish collection and day-to-day activities.
2. Original closeups for guppy, platy and other currently available species (the species cards use illustrative images until then).
3. A client-owned Open Graph image.
4. Set `SITE_URL` in the production environment to generate an absolute sitemap and matching `robots.txt` during the build.

## Local setup

```sh
npm install
npm run dev
npm run build
```

Set `SITE_URL` (or allow Vercel to provide `VERCEL_URL`) for sitemap generation in production.
