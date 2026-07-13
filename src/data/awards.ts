type AwardFrontmatter = {
  date?: string | Date;
  year?: string | number;
  title: string;
  summary: string;
  order?: number;
};

type AwardMarkdownModule = {
  frontmatter: AwardFrontmatter;
  Content: any;
};

const modules = import.meta.glob<AwardMarkdownModule>("../content/awards/*/index.md", {
  eager: true,
});

const formatYearMonth = (value: string | number | Date | undefined) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 7);
  }

  return String(value ?? "").slice(0, 7);
};

export const awards = Object.values(modules)
  .map((module) => ({
    ...module.frontmatter,
    date: formatYearMonth(module.frontmatter.date ?? module.frontmatter.year),
    description: module.frontmatter.summary,
    Content: module.Content,
  }))
  .sort(
    (a, b) =>
      b.date.localeCompare(a.date) ||
      (a.order ?? 999) - (b.order ?? 999) ||
      a.title.localeCompare(b.title),
  );
