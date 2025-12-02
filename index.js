import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Hello");
});

app.get("/products", (req, res) => {
  res.end("danh sach san pham");
});

app.get("/products/:id", (req, res) => {
  console.log(req);
  res.end("danh sach san pham");
});

app.listen(8888, () => {
  console.log("Server is running on http://localhost:8888");
});
