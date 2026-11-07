# Midhula Farm Hut

Responsive homepage for Midhula Farm Hut, an ornamental fish farm in Nooluvally, Thrissur, Kerala.

## Run locally

Requirements: Node.js and npm.

```powershell
npm install
npm.cmd run dev
```

Open the local address printed by Vite (normally `http://localhost:5173`). `npm.cmd` works around PowerShell's script execution policy without changing system settings.

## Production build

```powershell
npm.cmd run build
```

Set `SITE_URL` for sitemap and `robots.txt` generation. Vercel's `VERCEL_URL` is used automatically when available.

## Assets

The supplied Midhula Farm Hut logo is in `public/midhula-farm-hut-logo.jpg`. Fish and aquarium imagery remains illustrative until original farm photos are supplied. See [ASSETS.md](ASSETS.md) for photo sources and replacement notes.
