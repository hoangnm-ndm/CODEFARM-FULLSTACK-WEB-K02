# React + Vite

```bash
npm create vite
```

- Chon ten du an
- Chon framework: react
- Chon variant: JavaScript + SWC

## Thuc hanh 1

Xây dựng giao diện danh sách học viên với React.

- Nam thì hiển thị nội dung màu xanh
- Nữ hiển thị nội dung màu vàng
- Giới tính khác để màu tím

```javascript
export const students = [
  { id: 1, name: "Nguyễn Thị Vân Anh", age: 19, gender: "female" },
  { id: 2, name: "Lương Chính Quốc", age: 24, gender: "male" },
  { id: 3, name: "Pham Cong Vinh", age: 24, gender: "other" },
];
```

## Thuc hanh 2

Xây dựng giao diện theo yêu cầu sau:

- Lấy thông tin học viên từ data.js để hiển thị danh sách học viên dạng bảng.
- Mỗi học viên có thêm một cột "kết quả"
- Với học viên có score < 5 -> thêm thông tin ở cột "Kết quả" là "fail", ngược lại là "pass".
- Học viên fail để màu các thông tin là màu đỏ.
- Bên cạnh thông tin fail hiển thị nút bấm "Đăng ký học lại".
- Cuối bảng đếm tổng số học viên của cả lớp.
