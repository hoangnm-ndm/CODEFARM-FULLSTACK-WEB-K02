import z from "zod";

export const registerSchema = z
  .object({
    email: z.email({ message: "Email phải đúng định dạng!" }),
    password: z
      .string({ message: "Mật khẩu là bắt buộc!" })
      .min(6, { message: "Mật khẩu cần ít nhất 6 ký tự!" }),
    confirmPassword: z
      .string({ message: "Mật khẩu là bắt buộc!" })
      .min(6, { message: "Mật khẩu cần ít nhất 6 ký tự!" }),
    gender: z.number(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không trùng khớp",
    path: ["confirmPassword"], // path of error
  });

export const loginSchema = z.object({
  email: z.email({ message: "Email phải đúng định dạng!" }),
  password: z
    .string({ message: "Mật khẩu là bắt buộc!" })
    .min(6, { message: "Mật khẩu cần ít nhất 6 ký tự!" }),
});
