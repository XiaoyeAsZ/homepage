Lab Homepage
============

Astro skeleton for a research lab homepage, ready to deploy with GitHub Pages.

Pages included:

- Home
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

Edit site content in `src/data/`:

- `lab.ts` for lab identity, contact, and research areas
- `src/content/news/<item-folder>/index.md` for news items
- `src/content/publications/<paper-folder>/index.md` for papers
- `src/content/awards/<award-folder>/index.md` for awards
- `src/content/team/<member-folder>/index.md` and `avatar.*` for team members

The matching `src/data/*.ts` files are loaders that scan these folders and sort entries for the pages.

News folders:

```text
src/content/news/new-paper-accepted/
  index.md
```

```md
---
date: 2026-06-15
title: New paper accepted
summary: Short text shown on the homepage.
order: 1
---

Full news text shown on the News page.
```

Publication folders:

```text
src/content/publications/paper-slug/
  index.md
```

```md
---
date: 2026-07
title: Paper Title
authors: First Author and Second Author
venue: Conference Name
order: 1
links:
  - label: PDF
    href: "#"
---

Optional abstract or project note.
```

Award folders:

```text
src/content/awards/award-slug/
  index.md
```

```md
---
date: 2026-07
title: Best Paper Award
summary: Short text shown on the homepage.
order: 1
---

Full award details shown on the Awards page.
```

Team member folders:

```text
src/content/team/jane-doe/
  index.md
  avatar.jpg
```

`index.md` frontmatter:

```md
---
name: Jane Doe
role: PhD Student
type: phd
order: 1
---

Short biography or research description.
```

Supported `type` values: `instructor`, `phd`, `master`, `undergraduate`, `graduated`.
