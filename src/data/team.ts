import { pathFor } from "@/utils/paths";

type TeamType = "instructor" | "phd" | "master" | "undergraduate" | "graduated";

type TeamFrontmatter = {
  name: string;
  role: string;
  type: TeamType;
  order?: number;
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

const memberModules = import.meta.glob<TeamMarkdownModule>("../content/team/*/index.md", {
  eager: true,
});

const avatarModules = import.meta.glob<string>("../content/team/*/avatar.{avif,gif,jpeg,jpg,png,svg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const folderFromPath = (path: string) => path.split("/").at(-2) ?? "";

const members = Object.entries(memberModules)
  .map(([path, module]) => {
    const folder = folderFromPath(path);
    const avatarEntry = Object.entries(avatarModules).find(([avatarPath]) => folderFromPath(avatarPath) === folder);

    return {
      ...module.frontmatter,
      Content: module.Content,
      avatar: avatarEntry?.[1] ?? pathFor("/team-placeholder.svg"),
    };
  })
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));

export const teamSections = sectionConfig
  .map((section) => ({
    ...section,
    members: members.filter((member) => member.type === section.type),
  }))
  .filter((section) => section.members.length > 0);
