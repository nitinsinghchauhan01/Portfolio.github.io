export const getAssetPath = (path) => {
  if (!path) return '';
  // Remove leading slash if it exists so we don't end up with double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
