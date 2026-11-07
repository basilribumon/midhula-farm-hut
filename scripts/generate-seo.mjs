import { writeFile } from 'node:fs/promises';

const host = process.env.SITE_URL || process.env.VERCEL_URL;
if (!host) {
  console.log('SITE_URL/VERCEL_URL is not set; skipping absolute sitemap generation.');
  process.exit(0);
}
const base = new URL(host.startsWith('http') ? host : `https://${host}`).origin;
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}/</loc></url></urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
console.log(`Generated sitemap and robots.txt for ${base}`);
