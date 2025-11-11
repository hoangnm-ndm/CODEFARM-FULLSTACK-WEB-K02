## Buoc 1: createContext

## Buoc 2: tạo ra Context Provider và bọc App bởi Provider.

## Bước 3: Viết các hàm xử lý logic (nếu cần) và truyền vào Context Provider

## Bước 4: Sử dụng context với useContext()

## BTVN

- Xây dựng trang giỏ hàng với yêu cầu sau:

  - Khi ấn vào biểu tượng giỏ hàng trên header -> vào trang giỏ hàng.
  - Trong trang giỏ hàng, có thể tăng giảm số lượng sản phẩm (min: 1, max: 99).
  - Có thể xóa sản phẩm khỏi giỏ hàng.
  - Luôn cập nhật số lượng và tổng tiền giỏ hàng chính xác.
  - Số lượng sản phẩm ở icon giỏ hàng (trên header) luôn đồng bộ với số lượng thật có trong giỏ hàng.
  - Lưu sự thay đổi giỏ hàng vào localStorage.
  - Sử dụng `useReducer` để quản lý giỏ hàng và `useContext` để chia sẻ các dữ liệu của giỏ hàng đi mọi component liên quan.

**Tham khảo:** https://motor-dig-79206193.figma.site/
