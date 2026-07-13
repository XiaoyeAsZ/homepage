type PublicationLink = {
  label: string;
  href: string;
};

type PublicationFrontmatter = {
  date: string | Date;
  title: string;
  authors: string;
  venue: string;
  links?: PublicationLink[];
};

type PublicationMarkdownModule = {
  frontmatter: PublicationFrontmatter;
  Content: any;
};

const modules = import.meta.glob<PublicationMarkdownModule>("../content/publications/*/index.md", {
  eager: true,
});

const formatFullDate = (value: string | Date) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value).slice(0, 10);
};

export const publications = Object.values(modules)
  .map((module) => {
    const fullDate = formatFullDate(module.frontmatter.date);

    return {
      ...module.frontmatter,
      date: fullDate.slice(0, 7),
      fullDate,
      links: module.frontmatter.links ?? [],
      Content: module.Content,
    };
  })
  .sort((a, b) => b.fullDate.localeCompare(a.fullDate) || a.title.localeCompare(b.title));
