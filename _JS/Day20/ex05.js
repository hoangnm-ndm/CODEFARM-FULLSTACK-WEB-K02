console.log(Math);
// console.log(typeof Math);
// console.log(Math.abs(-10));
// console.log(Math.max(1, 10, -10, 100));
// console.log(Math.min(1, 10, -10, 100, "Hoang"));
// console.log(Math.pow(2, 4));

//* Các cách làm tròn trong JS

let a = 10.56789;

console.log(a.toFixed()); // làm tròn bao nhiêu chữ số tuỳ ý sau dấu phẩy và chuyển kết quả về chuỗi
console.log(a.toPrecision()); //
console.log(Number.parseInt(a)); // chuyển sang số nguyên
console.log(Math.floor(a)); // làm tròn xuống
console.log(Math.ceil(a)); // làm tròn lên
console.log(Math.round(a)); // làm tròn đến số nguyên gần nhất
console.log(Math.trunc(a)); // cắt đi phần sau dấu phẩy

// * Math.random()
