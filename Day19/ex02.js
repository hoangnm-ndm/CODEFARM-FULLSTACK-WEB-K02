console.log(Object.create({}));
console.log(Object.create(null));
const obj1 = Object.create(
	{},
	{
		name: { value: "Hoang", writable: true, enumerable: true, configurable: true },
		age: { value: 34, writable: true, enumerable: false, configurable: true },
		address: { value: "BN", writable: false, enumerable: true, configurable: true },
	}
);

console.log(obj1);

for (key in obj1) {
	console.log(key);
}

console.log(Object.keys(obj1));

obj1.address = "HN";
console.log(obj1);
/**
 * * Object.create({prototype},  {properties})
 * * - writable: config khả năng ghi đè hoặc xoá của thuộc tính
 * * - enumerable: config khả năng xuất hiện ở vòng lặp hoặc phương thức tĩnh của thuộc tính (ẩn thuộc tính hay không?)
 * * - configurable: config khả năng đặt lại tất cả các tuỳ chọn trên
 */

const arr = [1, 2, 3, 4];

arr[10] = 100;

console.log(arr);

const obj = {};
Object.defineProperty(obj, "name", {
	value: "Khang",
	configurable: false,
});

Object.defineProperty(obj, "age", {
	value: 33,
	configurable: false,
});

delete obj.name;

obj.email = "hoang@gmail.com";

console.log(obj);

console.log(obj.hasOwnProperty("major"));
