const fruits = ["banana", "apple", "kiwi"];
console.log(fruits[0]);
fruits[0] = "orange";
console.log(fruits);
console.log(fruits[-1]); // undefined
console.log(fruits[10]); // undefined
fruits[10] = "lemon";
console.log(fruits);
fruits[-1] = "mango";
console.log(fruits);
console.log(fruits[-1]);
fruits["abc"] = "nho";
console.log(fruits);

console.log(fruits.length);

const arr4 = [];
arr4[100] = "hoang";
console.log(arr4);
console.log(arr4.length);

fruits[2] = "orange";
// * reference
