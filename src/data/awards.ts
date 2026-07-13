type AwardFrontmatter = {
  date: string | Date;
  title: string;
  summary: string;
};

type AwardMarkdownModule = {
  frontmatter: AwardFrontmatter;
  Content: any;
};

const modules = import.meta.glob<AwardMarkdownModule>("../content/awards/*/index.md", {
  eager: true,
});

const formatFullDate = (value: string | Date) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value).slice(0, 10);
};

export const awards = Object.values(modules)
  .map((module) => {
    const fullDate = formatFullDate(module.frontmatter.date);

    return {
      ...module.frontmatter,
      date: fullDate.slice(0, 7),
      fullDate,
      description: module.frontmatter.summary,
      Content: module.Content,
    };
  })
  .sort((a, b) => b.fullDate.localeCompare(a.fullDate) || a.title.localeCompare(b.title));
