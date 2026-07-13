export const directoryFromPath = (path: string) => path.slice(0, path.lastIndexOf("/"));

export const resolveContentImage = (
  imageModules: Record<string, string>,
  directory: string,
  filename?: string,
) => {
  if (!filename) {
    return "";
  }

  const normalizedFilename = filename.replace(/^\.\//, "");
  const imageEntry = Object.entries(imageModules).find(
    ([imagePath]) => imagePath === `${directory}/${normalizedFilename}`,
  );

  return imageEntry?.[1] ?? "";
};
