import z from "zod";

export const registerSchema = z
  .object({
    email: z.email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    gender: z.number(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
