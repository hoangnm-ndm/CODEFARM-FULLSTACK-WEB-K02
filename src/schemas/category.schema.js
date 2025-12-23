import z from "zod";

export const categoryCreateSchema = new z.object({
  title: z.string().min(3).max(255),
  slug: z.string(),
  description: z.string().optional(),
  thumbnail: z.string(),
});

export const categoryUpdateSchema = new z.object({
  title: z.string().min(3).max(255).optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
});
