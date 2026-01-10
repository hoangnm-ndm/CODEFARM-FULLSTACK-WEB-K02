import nodemailer from "nodemailer";
import { EMAIL_PASSWORD, EMAIL_USER } from "./dotenvConfig.js";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});
