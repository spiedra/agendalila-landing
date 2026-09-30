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
  // IPv4 loopback, so the dev server has the same address on every machine
  // (`localhost` can resolve to IPv6 `::1`). The port is Astro's default: a
  // pinned port that another project already holds makes Astro silently pick
  // the next one, while requests to the pinned one reach the other project.
  server: { host: "127.0.0.1" },
});
