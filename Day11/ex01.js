// console.log(1 + "1");
// console.log("1" + 1); // * Toán tử nối chuỗi: +
// console.log("1" - 1); // * toán tử số học: -

// console.log(true + true); // true
// console.log(true + false);
// console.log(!"Thinh");
// console.log(!0);
// console.log(!"0");

// console.log(typeof ([] + []));

/**
 * * Ép kiểu ngầm định (ép kiểu tự động)
 * * - Khi dùng dấu "+" thì ưu tiên ép kiểu nối chuỗi nếu 1 trong 2 vế là chuỗi.
 * * - Các toán tử số học khác thì ưu tiên ép về kiểu số.
 * * Ép kiểu chủ động
 */

// console.log(String([]));
// console.log(String(1));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(NaN)); // NaN
// console.log(Number("")); // 0
// console.log(Number([])); // 0

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean([])); // * ? true

console.log("10");
console.log(!!"Hoang");

if (2 > 1) {
	console.log("haha");
}
