import z from "zod";

export const productCreateSchema = new z.object({
  title: z.string().min(3).max(255),
  price: z.number().min(0),
  description: z.string().optional(),
});

export const productUpdateSchema = new z.object({
  title: z.string().min(3).max(255).optional(),
  price: z.number().min(0).optional(),
  description: z.string().optional(),
});
