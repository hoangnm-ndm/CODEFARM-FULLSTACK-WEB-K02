import mongoose from "mongoose";

function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/k02")
    .then(() => {
      console.log(`Connected database successfully!`);
    })
    .catch(() => {
      console.log(`Connect database failed!`);
    });
}
export default connectDB;
