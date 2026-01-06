import z from "zod";

export const signUpSchema = new z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signInSchema = new z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
