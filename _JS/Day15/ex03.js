const arr = [1, 2, 3, 4, ["Hoang"]];

// const result = arr.concat(5, 6, [7, 8], 9);

// console.log(result);
// console.log(arr);

const arrCopy = arr.concat();
arrCopy[4][0] = "Quoc";
arrCopy[3] = 1000;

console.log(arrCopy);
console.log(arr);

console.log(arrCopy === arr);

/**
 * * Khi làm việc với các giá trị kiểu tham chiếu (reference type)
 * * Shallow copy:
 * * - Chỉ copy được các phần tử ở lớp ngoài cùng và địa chỉ ô nhớ.
 * * - Shallow copy phổ biến như sử dụng: slice, concat, spreads, vòng lặp.
 *
 * * Deep copy:
 * * - Thực sự tạo ra một biến mới (object, array) không còn liên quan gì đến biến gốc
 */

const arrDeepCopy = structuredClone(arr);
arrDeepCopy[4][0] = "Quoc dep zai";
console.log(arrDeepCopy);

const students = ["hoang", "trump", "putin"];

const classA = students;

classA.pop();

console.log(classA);
console.log(students);

let a = 10;

let b = a;

b = 20;

console.log(a);
