import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";

import react from "@astrojs/react";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";

// Preview-only: the Base44 preview proxy forwards the public host name, which the dev server
// rejects as an unknown host. Allow that host while BASE44_PREVIEW_MODE is exactly "1"; with the
// flag unset (normal development and every deploy) no allowedHosts override is applied.
const previewAllowedHosts =
  process.env.BASE44_PREVIEW_MODE === "1"
    ? [process.env.BASE44_PUBLIC_HOST_SUFFIX, process.env.BASE44_SANDBOX_HOST_DOMAIN]
        .filter(Boolean)
        .flatMap((host) => [`3000-${host}`, `.${host}`])
    : [];

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ...(previewAllowedHosts.length > 0 ? { server: { allowedHosts: previewAllowedHosts } } : {}),
  },
  integrations: [wix(), wixPages(), react()],
  security: { checkOrigin: false },
  adapter: wixHostingAdapter(),

  image: {
    domains: ["static.wixstatic.com"],
  },

  output: "server",
});