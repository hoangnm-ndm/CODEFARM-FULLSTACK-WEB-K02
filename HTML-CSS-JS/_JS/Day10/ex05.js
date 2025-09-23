// * Toán tử gán: =, +=, -=, *=, /=, %=, **=

let a = 10;
a += 20;
console.log(a);

let c = 10;
c *= 10;
console.log(c);

// * Toán tử so sánh : ==, ===, !=, !==, >, <, >=, <=
let x = 10;
let y = "10";
console.log(x == y); // * true
console.log(x === y); // * false

/**
 * * Ép kiểu ngầm định và ép kiểu chủ động
 */

// * Toán tử logical
// * &&: toán tử AND
// * ||: toán tử OR
// * !: Toán tử NOT (phủ định)

console.log(true && false); // * false
console.log(true || false); // * true
console.log(false || true); // * true

console.log("Hoang" && 10 && undefined && null && "" && 0); // * null

//* Falsy values:
/**
 * ""
 * null
 * undefined
 * NaN
 * false
 * 0
 */

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(!0);

console.log(null || NaN || undefined || null || "" || 0); // * Kiểm tra các giá trị truthy
