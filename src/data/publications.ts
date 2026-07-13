type PublicationLink = {
  label: string;
  href: string;
};

type PublicationFrontmatter = {
  date?: string | Date;
  year?: string | number;
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

const formatYearMonth = (value: string | number | Date | undefined) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 7);
  }

  return String(value ?? "").slice(0, 7);
};

export const publications = Object.values(modules)
  .map((module) => ({
    ...module.frontmatter,
    date: formatYearMonth(module.frontmatter.date ?? module.frontmatter.year),
    links: module.frontmatter.links ?? [],
    Content: module.Content,
  }))
  .sort(
    (a, b) =>
      b.date.localeCompare(a.date) ||
      (a.order ?? 999) - (b.order ?? 999) ||
      a.title.localeCompare(b.title),
  );
