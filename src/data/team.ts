import { pathFor } from "@/utils/paths";

type TeamType = "instructor" | "phd" | "master" | "undergraduate" | "graduated";

type TeamLink = {
  label: string;
  href: string;
};

type TeamFrontmatter = {
  name: string;
  role: string;
  type: TeamType;
  date: string | Date;
  email?: string;
  phone?: string;
  links?: TeamLink[];
};

type TeamMarkdownModule = {
  frontmatter: TeamFrontmatter;
  Content: any;
};

const sectionConfig: Array<{ type: TeamType; title: string; description: string }> = [
  {
    type: "instructor",
    title: "Instructor",
    description: "Faculty and principal investigators.",
  },
  {
    type: "phd",
    title: "PhD Students",
    description: "Doctoral students and long-term research leads.",
  },
  {
    type: "master",
    title: "Master Students",
    description: "Master students working on thesis and research projects.",
  },
  {
    type: "undergraduate",
    title: "Undergraduates",
    description: "Undergraduate researchers and project assistants.",
  },
  {
    type: "graduated",
    title: "Graduated",
    description: "Alumni and former visiting members.",
  },
];

const memberModules = import.meta.glob<TeamMarkdownModule>("../content/team/**/index.md", {
  eager: true,
});

const avatarModules = import.meta.glob<string>("../content/team/**/avatar.{avif,gif,jpeg,jpg,png,svg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const directoryFromPath = (path: string) => path.slice(0, path.lastIndexOf("/"));

const slugFromPath = (path: string) => {
  const directory = directoryFromPath(path);
  return directory.split("/").at(-1) ?? "";
};

const formatFullDate = (value: string | Date) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value).slice(0, 10);
};

const members = Object.entries(memberModules)
  .map(([path, module]) => {
    const directory = directoryFromPath(path);
    const avatarEntry = Object.entries(avatarModules).find(([avatarPath]) => directoryFromPath(avatarPath) === directory);

    return {
      slug: slugFromPath(path),
      ...module.frontmatter,
      date: formatFullDate(module.frontmatter.date),
      email: module.frontmatter.email ?? "",
      phone: module.frontmatter.phone ?? "",
      links: module.frontmatter.links ?? [],
      Content: module.Content,
      avatar: avatarEntry?.[1] ?? pathFor("/team-placeholder.svg"),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.name.localeCompare(b.name));

export const teamSections = sectionConfig
  .map((section) => ({
    ...section,
    members: members.filter((member) => member.type === section.type),
  }))
  .filter((section) => section.members.length > 0);
