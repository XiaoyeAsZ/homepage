import { defineConfig } from "astro/config";

// For a project page, set GITHUB_PAGES_BASE to "/repository-name".
// For a user/organization page, leave it empty or set it to "/".
export default defineConfig({
  site: process.env.SITE_URL ?? "https://your-github-username.github.io",
  base: process.env.GITHUB_PAGES_BASE ?? "/",
});
