Lab Homepage
============

Astro skeleton for a research lab homepage, ready to deploy with GitHub Pages.

Pages included:

- Home
- About
- News
- Publications
- Awards
- Team

Local development:

```sh
npm install
npm run dev
```

On this machine the default `node` is old; use the bundled helper after installing Node 22+
at `~/.local/node-v22`:

```sh
./scripts/use-node22.sh npm run dev
```

Build:

```sh
npm run build
```

GitHub Pages:

1. Push this repo to GitHub.
2. In the repository settings, open Pages.
3. Set the source to GitHub Actions.
4. Push to `main`; `.github/workflows/deploy.yml` builds and deploys the site.

For a project page such as `https://username.github.io/homepage`, the workflow sets Astro's
`base` automatically. For a user page such as `https://username.github.io`, keep the repository
name as `username.github.io`.

Edit lab content in `src/data/lab.ts`.
