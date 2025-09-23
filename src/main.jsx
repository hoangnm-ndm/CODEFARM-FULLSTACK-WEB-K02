import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// * Hồi react mới ra, chưa viết bằng JSX
// const title2 = React.createElement(
//   "div",
//   { className: "container" },
//   React.createElement("h2", { className: "title" }, "Tieu de trang web")
// );

// * Khi React sử dụng cú pháp JSX
// const title = (
//   <div className="container">
//     <h2 className="title">Tieu de trang web</h2>
//   </div>
// );

createRoot(document.getElementById("root")).render(<App />);

// console.log(title);

// * JSX = JavaScript XML

// const rootElement = document.getElementById("root");

// const app = createRoot(rootElement);

// app.render("<h1>Hello ca lop</h1>");
