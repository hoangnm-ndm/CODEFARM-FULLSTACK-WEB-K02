# Sử dụng react-hook-form cho những tính năng sau

## Trang đăng ký

- Bao gồm:
  - Email: đúng định dạng
  - Password: tối thiểu 6 ký tự.
  - Confirm Password: Khớp password.
  - Lựa chọn giới tính: nam - 0, nữ - 1, khác - 2.
  - Checkbox xác nhận đã đọc kỹ chính sách và điều khoản.
- Validation đầy đủ với giao diện phù hợp.
- Ngăn chặn hành vi spam submit form.
- Đăng ký thành công -> chuyển trang đăng nhập.
- Đăng ký thất bại -> Reset form, báo toast thất bại.

## Trang đăng nhập

- Bao gồm:
  - Email: đúng định dạng
  - Password: tối thiểu 6 ký tự.
  - Checkbox: Ghi nhớ tài khoản này.
- Validation đầy đủ với giao diện phù hợp.
- Ngăn chặn hành vi spam submit form.
- Đăng nhập thành công -> chuyển trang home.
- Đăng nhập thất bại -> Reset form, báo toast thất bại.
