import mongoose from "mongoose";
import { DB_URI } from "./dotenvConfig.js";

function connectDB() {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log(`Connected database successfully!`);
    })
    .catch(() => {
      console.log(`Connect database failed!`);
    });
}
export default connectDB;
