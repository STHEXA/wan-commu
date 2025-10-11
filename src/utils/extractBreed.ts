export const extractBreed = (url: string): string | null => {
  const base = process.env.NEXT_PUBLIC_DOG_API_BASE;

  if (!base || !url.startsWith(base)) return null;

  const rest = url.slice(base.length);
  return rest.split("/")[0] || null;
};
