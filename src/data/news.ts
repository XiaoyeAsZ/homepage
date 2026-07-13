type NewsFrontmatter = {
  date: string | Date;
  title: string;
  summary: string;
};

type NewsMarkdownModule = {
  frontmatter: NewsFrontmatter;
  Content: any;
};

const modules = import.meta.glob<NewsMarkdownModule>("../content/news/*/index.md", {
  eager: true,
});

export const news = Object.values(modules)
  .map((module) => ({
    ...module.frontmatter,
    date:
      module.frontmatter.date instanceof Date
        ? module.frontmatter.date.toISOString().slice(0, 10)
        : String(module.frontmatter.date).slice(0, 10),
    body: module.frontmatter.summary,
    Content: module.Content,
  }))
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
