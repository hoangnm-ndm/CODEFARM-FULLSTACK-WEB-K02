const myFetch3 = fetch("http://dummyjson.com/products?limit=10&skip=10")
  .then((res) => res.json())
  .then((data) => data);
const myFetch1 = fetch("http://dummyjson.com/productss?limit=40&skip=0")
  .then((res) => res.json())
  .then((data) => data);
const myFetch2 = fetch("http://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => data);

Promise.race([myFetch1, myFetch2, myFetch3])
  .then((data) => {
    console.log(data);
    console.log("xong");
  })
  .catch((err) => {
    console.log(err);
    console.log("fail");
  });

/**
 * * Promise.race
 * * - Nhận vào 1 array các promise.
 * * - Thực hiện toàn bộ các promise này đồng thời (không cần tuần tự)
 * * - Promise nào thực thi nhanh nhất sẽ được trả về kết quả trong then.
 * * - Nếu 1 trong số các promise bị rejected thì thực thi catch.
 *
 * * KHI NÀO DÙNG PROMISE.race?
 * - Khi chỉ cần 1 kết quả nhanh nhất cho 1 lượng request.
 * Ví dụ: Gọi đồng thời nhiều API đến nhiều server để lấy nhanh nhất 1 kết quả duy nhất.
 */
