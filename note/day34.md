# useEffect

useEffect(callbackEffect, deps)
Trong đó:

- callbackEffect là một hàm sẽ được gọi lại khi effect được kích hoạt.
- deps là danh sách các sự phụ thuộc dùng để kích hoạt callbackEffect

Cụ thể như sau:

## Cách dùng 1

- deps là mảng rỗng: callback được gọi 1 lần duy nhất sau khi component được mount.
- fetch API, Cập nhật giao diện với data call API.

## Cách dùng 2

- deps là mảng chứa giá trị: callback được gọi 1 lần sau khi component được mount và được gọi lại mỗi khi có 1 trong số các deps thay đổi.
- Áp dụng các bộ lọc như tìm kiếm, sắp xếp, phân trang, .v.v

## Cách dùng 3

- Callback của useEffect return ra một function.
- function này sẽ được gọi ngay khi component unmount
- Vì lý do này, các logic liên quan đến dọn dẹp thường sử dụng trong return của callback khi dùng useEffect.
- Ví dụ: removeEventListener, unSubscribe, ngừng fetch API khi không chờ kết quả, làm việc với timer, .v.v

> Lưu ý: không bao giờ được quên deps -> Nếu quên thì kết quả giống như không dùng useEffect.
