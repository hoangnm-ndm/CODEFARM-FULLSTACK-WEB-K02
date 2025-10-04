# useEffect

useEffect(callbackEffect, deps)
Trong đó:

- callbackEffect là một hàm sẽ được gọi lại khi effect được kích hoạt.
- deps là danh sách các sự phụ thuộc dùng để kích hoạt callbackEffect

Cụ thể như sau:

## Cách dùng 1

- deps là mảng rỗng: callback được gọi 1 lần duy nhất sau khi component được mount.

## Cách dùng 2

- deps là mảng chứa giá trị: callback được gọi 1 lần sau khi component được mount và được gọi lại mỗi khi có 1 trong số các deps thay đổi.

## Cách dùng 3

clean up => chua day

> Lưu ý: không bao giờ được quên deps -> Nếu quên thì kết quả giống như không dùng useEffect.
