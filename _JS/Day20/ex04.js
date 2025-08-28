/**
 * * Number
 */

// let a = 10.23435446545; // * Ưu tiên sử dụng vì dễ khai báo, tốn ít tài nguyên bộ nhớ, hiệu suất tốt.
// let b = new Number("10.05");
// let c = 10_000_000_000;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a.toFixed(3));

// * Sự khác nhau giữa sử dụng phương thức tĩnh của hàm tạo (class) và phương thức thông qua prototype là gì?

// * Các phương thức được đặt trong prototype có nhiệm vụ làm việc với instance nên được truy cập thông qua instance (VD: number.toFixed())

// * Các thuộc tính, phương thức tĩnh (static methods, static properties) thì được khai báo trong hàm tạo (hoặc class) nên được truy cập thông qua hàm tạo Number

console.log(Number.NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.isNaN(NaN));
console.log(Number.parseInt(10.333333));

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log(9007199254740993n * 2n);

// * Khi gặp số quá lớn, hoặc quá nhỏ vượt qua ngưỡng SAFE_NUMBER thì nên dùng BigInt để tính toán
