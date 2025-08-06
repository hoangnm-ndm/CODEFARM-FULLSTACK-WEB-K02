const a = new Number(10.33);
console.log(a);
console.log(typeof a);
console.log(a instanceof Number);
console.log(a.valueOf());
console.log(a.toString());
console.log(a.toFixed(1));

const b = 100.56;

console.log(b.valueOf());
console.log(b.toFixed(1));

// * boxing
// * String -> String
// * Number -> Number
// * Bolean -> Bolean
// * Date -> Date

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
