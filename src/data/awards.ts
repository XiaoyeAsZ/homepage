type AwardFrontmatter = {
  year: string | number;
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

export const awards = Object.values(modules)
  .map((module) => ({
    ...module.frontmatter,
    year: String(module.frontmatter.year),
    description: module.frontmatter.summary,
    Content: module.Content,
  }))
  .sort(
    (a, b) =>
      Number(b.year) - Number(a.year) ||
      (a.order ?? 999) - (b.order ?? 999) ||
      a.title.localeCompare(b.title),
  );
