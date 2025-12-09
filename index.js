import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/configs/connectDB.js";
import notFoundRequest from "./src/middlewares/notFoundRequest.js";
import { HOST, PORT } from "./src/configs/dotenvConfig.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/", router);

// * handle Notfound Request
app.use(notFoundRequest);

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
