# Cài đặt JSON-Server

```bash
npm i -g json-server

npm i json-server@0.17.0

```

- Tạo file db.json ở thư mục ngoài cùng.

- Chạy câu lệnh:

```bash
json-server --watch db.json --port 3000
```

- Cập nhật code, gọi đến `http://localhost:3000/products` để lấy thông tin sản phẩm

---

# Khởi tạo dự án NodeJS

```bash
npm init
```

- Lựa chọn các thông tin cho dự án.

## Vào package.json sửa lại script:

```json
  "scripts": {
    "dev": "json-server --watch db.json --port 3000"
  },
```

- Khởi động server bằng câu lệnh `npm run dev`
