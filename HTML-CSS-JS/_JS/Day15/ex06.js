const arr = [10, 11, 12];

// arr.forEach((item, index, thisArr) => {
// 	console.log(`item: ${item}`);
// 	console.log(`index: ${index}`);
// 	console.log(`thisArr: ${thisArr}`);
// });

const students = ["hoang", "huy", "phuc"];

let stringContent = "Danh sach sinh vien:";

students.forEach((item) => {
	stringContent += ` ${item}`;
});

console.log(stringContent);

document.write(stringContent);

const arr2 = [
	{ id: 1, firstName: "Hoang", lastName: "Nguyen Minh" },
	{ id: 2, firstName: "Tien", lastName: "Tran Minh" },
	{ id: 3, firstName: "Huy", lastName: "Hoang Thanh" },
	{ id: 4, firstName: "Dat", lastName: "Trinh Quoc" },
];

// * Yêu cầu tạo ra mảng mới với các thành phần như mảng cũ, và thêm 1 trường là `fullName` có cấu trúc: lastName + " " + "firstName"

const arr3 = [];

arr2.forEach((item) => {
	item.fullName = item.lastName + " " + item.firstName;
	arr3.push(item);
});

console.log(arr3);

const result = [1, 2, 3, 4].map((item) => item * 2);
console.log(result);
const result2 = arr2.map((item) => {
	item.fullName = item.lastName + " " + item.firstName;
	return item;
});

console.log(result2);
