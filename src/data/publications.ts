type PublicationLink = {
  label: string;
  href: string;
};

type PublicationFrontmatter = {
  year: string | number;
  title: string;
  authors: string;
  venue: string;
  links?: PublicationLink[];
  order?: number;
};

type PublicationMarkdownModule = {
  frontmatter: PublicationFrontmatter;
  Content: any;
};

const modules = import.meta.glob<PublicationMarkdownModule>("../content/publications/*/index.md", {
  eager: true,
});

export const publications = Object.values(modules)
  .map((module) => ({
    ...module.frontmatter,
    year: String(module.frontmatter.year),
    links: module.frontmatter.links ?? [],
    Content: module.Content,
  }))
  .sort(
    (a, b) =>
      Number(b.year) - Number(a.year) ||
      (a.order ?? 999) - (b.order ?? 999) ||
      a.title.localeCompare(b.title),
  );
