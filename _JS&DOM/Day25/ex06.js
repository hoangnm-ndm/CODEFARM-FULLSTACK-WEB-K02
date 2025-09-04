/**
 * * storage là một phần của WEB API, là kho chứa dữ liệu của website trên trình duyệt.
 * * localStorage:
 * * - dung lượng 5-10MB (tuỳ trình duyệt)
 * * - lưu trữ dạng key-value (value là string)
 * * - được quản lý theo domain/ip address.
 * * - vĩnh viễn không mất đi nếu không xoá.
 * * - Sử dụng để lưu những thông tin mang tính bền vững của người dùng, ví dụ theme, choose cookies, fonts, độ thu phóng, ngôn ngữ,...

 * 
 * 
 *  * sessionStorage:
 * * - dung lượng 5-10MB (tuỳ trình duyệt)
 * * - lưu trữ dạng key-value (value là string)
 * * - được quản lý theo tab.
 * * - khi người dùng thoát thì tự động xoá.
 * * - Sử dụng khi muốn lưu trữ các thông tin tồn tại và thay đổi theo phiên của người dùng.
 * 
 * 
 * * Các phương thức: setItem, get, remove, clear.
 */

localStorage.setItem("name", "Hoang");
localStorage.setItem("age", 33);
console.log(localStorage.getItem("age"));

console.log(localStorage);

// localStorage.removeItem("age");
// localStorage.clear();

// sessionStorage.setItem("name", "Hoang");
// sessionStorage.setItem("age", 33);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    localStorage.setItem("products", JSON.stringify(data.products));
  });

// [object Object]
