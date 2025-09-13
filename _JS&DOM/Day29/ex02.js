const myFetch1 = fetch("http://dummyjson.com/products?limit=10&skip=10")
  .then((res) => res.json())
  .then((data) => data);
const myFetch2 = fetch("http://dummyjson.com/products?limit=40&skip=0")
  .then((res) => res.json())
  .then((data) => data);
const myFetch3 = fetch("http://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => data);

const result = Promise.all([myFetch1, myFetch2, myFetch3])
  .then((data) => {
    console.log(data);
    console.log("xong");
  })
  .catch((err) => {
    console.log(err);
    console.log("fail");
  });
console.log(result);

/**
 * * Promise.all
 * * - Nhận vào 1 array các promise.
 * *- Thực hiện toàn bộ các promise này đồng thời (không cần tuần tự)
 * * - Nếu tất cả đều thành công, promise.all gọi đến `then` và trả về arr các kết quả của các promise (theo đúng thứ tự)
 * * - Nếu 1 trong số các promise bị rejected thì Promise.all dừng ngay lập tức và trả về err trong catch.
 *
 * * KHI NÀO DÙNG PROMISE.ALL?
 * - khi phải xử lý nhiều tác vụ bất đồng bộ đều cần thành công nhưng không cần chúng tuần tự. Ví dụ:
 * - Upload nhiều file lên ứng dụng.
 * - Tải nhiều media cùng lúc.
 */
