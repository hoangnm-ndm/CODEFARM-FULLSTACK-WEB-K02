/**
 * * Các phương thức thay đổi mảng: push, pop, shift, unshift
 */

const teamLayKinh = ["su phu"];
const result1 = teamLayKinh.push("Ngo khong");
console.log(result1);

const result2 = teamLayKinh.unshift("Ngua");
console.log(result2);

const result3 = teamLayKinh.shift();
console.log(result3);

const result4 = teamLayKinh.pop();
console.log(result4);

/**
 * * Khi thêm (push, unshift) thì trả về độ dài mới của mảng.
 * * Khi bớt (pop, shift) thì trả về phần tử được bỏ đi
 */
