import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const products = [{ id: 1, name: "San pham A", price: 200 }];

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // res.end("Xin chao ca lop!");

  const { url, method, query, body, params } = req;
  if (url === "/products" && method === "GET") {
    return res.end(JSON.stringify(products));
  }

  console.log(req);

  console.log({ params });
  console.log({ query });

  // if (url === "/products" && method === "GET") {
  //   return res.end(JSON.stringify(products));
  // }

  /**
   * * Nếu ứng dụng của mình có hàng trăm nghiệp vụ thì hàng trăm lần if...else
   */
  return res.end("hello");
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}/`);
});

/**
 * * npm init -y
 * * npm i nodemon --save-dev
 * * trong package.json, sửa:
  "scripts": {
    "dev": "nodemon index.js"
  },
 * * Thực hiện câu lệnh: npm run dev.
 * * Kiểm tra http://localhost:3000 
 */
