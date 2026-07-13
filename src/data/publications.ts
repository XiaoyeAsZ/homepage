import { directoryFromPath, resolveContentImage } from "@/utils/contentImages";
import { resolvePublicationTopics, type TopicId } from "./topics";

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
  topics?: TopicId[];
  image?: string;
  imageAlt?: string;
};

type PublicationMarkdownModule = {
  frontmatter: PublicationFrontmatter;
  Content: any;
};

const modules = import.meta.glob<PublicationMarkdownModule>("../content/publications/*/index.md", {
  eager: true,
});

const imageModules = import.meta.glob<string>(
  "../content/publications/**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
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

const slugFromPath = (path: string) => {
  const parts = path.split("/");
  return parts[parts.length - 2] ?? "";
};

export const publications = Object.entries(modules)
  .map(([path, module]) => {
    const directory = directoryFromPath(path);
    const fullDate = formatFullDate(module.frontmatter.date);

    return {
      slug: slugFromPath(path),
      ...module.frontmatter,
      date: fullDate.slice(0, 7),
      fullDate,
      links: module.frontmatter.links ?? [],
      topics: resolvePublicationTopics(module.frontmatter.topics ?? []),
      image: resolveContentImage(imageModules, directory, module.frontmatter.image),
      imageAlt: module.frontmatter.imageAlt ?? module.frontmatter.title,
      Content: module.Content,
    };
  })
  .sort((a, b) => b.fullDate.localeCompare(a.fullDate) || a.title.localeCompare(b.title));
