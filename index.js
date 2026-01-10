import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/shared/configs/connectDB.js";
import notFoundRequest from "./src/shared/middlewares/notFoundRequest.js";
import { HOST, PORT } from "./src/shared/configs/dotenvConfig.js";
import { sendMail } from "./src/modules/mail/sendMail.js";
import { getTemplateWelcome } from "./src/modules/mail/mail.template.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB();

app.use("/", router);
app.post("/welcome", async (req, res) => {
  await sendMail("phuclam6987@gmail.com", "CHAO BAN", getTemplateWelcome());
  return res.status(200).json("ok");
});

// * handle Notfound Request
app.use(notFoundRequest);

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
