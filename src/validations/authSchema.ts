import z from "zod";
import { passwordRegex } from "../constants/common";

export const registerSchema = z.object({
  email: z.string().email({ message: "Email chưa đúng định dạng" }),
  password: z.string().min(6).regex(passwordRegex, {
    message:
      "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Email chưa đúng định dạng" }),
  password: z.string().min(6).regex(passwordRegex, {
    message:
      "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
  }),
});
