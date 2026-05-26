import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Static marketing landing for AgendaLila (the SaaS), deployed on Cloudflare
// Pages (auto-deploy on push to master). Mirrors the amorelila-landing setup:
// Astro static + Tailwind v4 via the Vite plugin + sitemap.
export default defineConfig({
  output: "static",
  site: "https://agendalila.com",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  server: { host: "127.0.0.1", port: 3000 },
});
