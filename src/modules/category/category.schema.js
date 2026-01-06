import z from "zod";

export const categoryCreateSchema = new z.object({
  title: z.string().min(3).max(255),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
});

export const categoryUpdateSchema = new z.object({
  title: z.string().min(3).max(255).optional(),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
});
