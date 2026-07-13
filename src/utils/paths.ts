const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

export function pathFor(path: string) {
  if (path.startsWith("http") || path.startsWith("mailto:") || path === "#") {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}
