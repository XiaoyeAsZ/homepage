import { directoryFromPath, resolveContentImage } from "@/utils/contentImages";

type AwardFrontmatter = {
  date: string | Date;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

type AwardMarkdownModule = {
  frontmatter: AwardFrontmatter;
  Content: any;
};

const modules = import.meta.glob<AwardMarkdownModule>("../content/awards/*/index.md", {
  eager: true,
});

const imageModules = import.meta.glob<string>(
  "../content/awards/**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const formatFullDate = (value: string | Date) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value).slice(0, 10);
};

export const awards = Object.entries(modules)
  .map(([path, module]) => {
    const directory = directoryFromPath(path);
    const fullDate = formatFullDate(module.frontmatter.date);

    return {
      ...module.frontmatter,
      date: fullDate.slice(0, 7),
      fullDate,
      description: module.frontmatter.summary,
      image: resolveContentImage(imageModules, directory, module.frontmatter.image),
      imageAlt: module.frontmatter.imageAlt ?? module.frontmatter.title,
      Content: module.Content,
    };
  })
  .sort((a, b) => b.fullDate.localeCompare(a.fullDate) || a.title.localeCompare(b.title));
