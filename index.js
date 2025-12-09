import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/configs/connectDB.js";
import notFoundRequest from "./src/middlewares/notFoundRequest.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/", router);

// * handle Notfound Request
app.use(notFoundRequest);

app.listen(8888, () => {
  console.log("Server is running on http://localhost:8888");
});
