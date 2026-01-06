import slugify from "slugify";

export function addSlugUtils(sourceField, options = {}) {
  const baseSlug = slugify(sourceField, {
    ...options,
    lower: false,
    strict: false,
    locale: "vi",
    trim: true,
  });

  const suffix = Date.now().toString().slice(-3);
  const finalSlug = `${baseSlug}-${suffix}`;
  return finalSlug;
}
