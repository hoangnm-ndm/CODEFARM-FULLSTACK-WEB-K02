import dotenv from "dotenv";

dotenv.config({
  // path: []
  // encoding: "utf8"
  // override: true,
});

export const {
  HOST,
  PORT,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = process.env;
