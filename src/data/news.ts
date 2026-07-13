import { directoryFromPath, resolveContentImage } from "@/utils/contentImages";

type NewsFrontmatter = {
  date: string | Date;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

type NewsMarkdownModule = {
  frontmatter: NewsFrontmatter;
  Content: any;
};

const modules = import.meta.glob<NewsMarkdownModule>("../content/news/*/index.md", {
  eager: true,
});

const imageModules = import.meta.glob<string>(
  "../content/news/**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

export const news = Object.entries(modules)
  .map(([path, module]) => {
    const directory = directoryFromPath(path);

    return {
      ...module.frontmatter,
      date:
        module.frontmatter.date instanceof Date
          ? module.frontmatter.date.toISOString().slice(0, 10)
          : String(module.frontmatter.date).slice(0, 10),
      body: module.frontmatter.summary,
      image: resolveContentImage(imageModules, directory, module.frontmatter.image),
      imageAlt: module.frontmatter.imageAlt ?? module.frontmatter.title,
      Content: module.Content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
