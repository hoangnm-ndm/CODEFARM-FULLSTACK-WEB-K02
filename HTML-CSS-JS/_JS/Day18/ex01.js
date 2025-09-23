const arr = Array.from({ length: 1000 }, (_, index) => index * 2);
console.log(arr); // [1, 2, 3, ..., 1000]

const arr2 = Array.from({ length: 3 }, (_, row) => Array.from({ length: 3 }, (_, col) => row * 3 + col));
console.log(arr2);
