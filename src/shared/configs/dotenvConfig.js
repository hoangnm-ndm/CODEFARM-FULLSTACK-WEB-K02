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
  CLIENT_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_REFRESH,
  JWT_REFRESH_EXPRIRES,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = process.env;
