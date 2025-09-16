# Xây dựng giỏ hàng

- Thời gian làm bài: 120 phút.
- Không sử dụng AI trong quá trình làm bài.
- Được sử dụng W3Schools, MDN để tra cứu cú pháp và tài liệu.
- Không được sử dụng tài liệu đã chuẩn bị trước, mở source code bài học trên lớp hoặc các bài tập đã làm.
- Sử dụng `Json-server` để làm bài (`http://localhost:3000/todos`)
- Cách chạy dự án:

```bash
npm install
npm run dev
```

## Chức năng ứng dụng

1. Hiển thị danh sách sản phẩm từ dữ liệu mẫu:
   - **Hiển thị**: Hiển thị các trường: `name` (tên sản phẩm), `price` (giá sản phẩm), `image` (ảnh sản phẩm) (2 điểm).
2. Hiển thị sản phẩm từ giỏ hàng:
   - **Hiển thị**: Hiển thị được các sản phẩm từ giỏ hàng trả về (`name`, `price`, `image`, `quantity`, `nút xoá khỏi giỏ hàng`) (2 điểm).
3. Thêm sản phẩm vào giỏ hàng:
   - **Yêu cầu**: Thêm sản phẩm thành công. Dữ liệu gửi đi (`id`, `name`, `price`, `quantity`, `image`) (1 điểm).
   - **Validation**: Nếu sản phẩm thêm vào đã tồn tại trong giỏ hàng thì tăng số lượng `(quantity)` của sản phẩm đó (2 điểm).
4. Cập nhật số lượng sản phẩm:
   - **Yêu cầu**: Cập nhật được số lượng sản phẩm (1 điểm).
   - **Validation**: Không được giảm số lượng sản phẩm xuống số âm (1 điểm).
5. Xoá sản phẩm khỏi giỏ hàng:
   - **Yêu cầu**: Xoá sản phẩm thành công khỏi giỏ hàng. (1 điểm)
