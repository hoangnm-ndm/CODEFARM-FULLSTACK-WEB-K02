const arr = [1, 5, 4, 2, 7, 0, 9, 10, 100, -10, 1000, 3];

// console.log(arr.sort((a, b) => a - b));

/**
 * * sort(compareFn?)
 * * Nếu không truyền compareFn: Sắp xếp kiểu chuỗi theo bảng mã ASCII
 * * Nếu truyền (a, b) => a - b:
 * * - dương: a sau b,
 * * - âm: a trước b,
 * * - nếu NaN hoặc = 0: không đổi chỗ.
 */

// console.log("0" < "1");

// console.log("H" > "A");

// console.log("Hoang" > "CodeFarm");

// console.log("HoangNguyen" < "HoangPham");

const students = [
	{ id: 1, name: "Phuc", age: 22 },
	{ id: 2, name: "Thinh", age: 20 },
	{ id: 3, name: "Vinh", age: 21 },
	{ id: 4, name: "VanAnh", age: 19 },
	{ id: 5, name: "Phuong", age: 21 },
	{ id: 6, name: "Hoang", age: 21 },
];

/**
 * * Viết hàm sortByField(arr, fieldName)
 * * Sắp xếp arr theo trường fieldName,
 * * Nếu fieldName là số, sắp xếp tăng dần
 * * Nếu fieldName là chuỗi, sắp xếp từ a - z
 */

function checkTypeOfField(arr, fieldName) {
	let typeFieldName = null;
	if (arr.every((item) => typeof item[fieldName] === "number")) {
		typeFieldName = "number";
	} else if (arr.every((item) => typeof item[fieldName] === "string")) {
		typeFieldName = "string";
	} else {
		typeFieldName = null;
	}
	return typeFieldName;
}

function sortByField(arr, fieldName) {
	const typeOfField = checkTypeOfField(arr, fieldName);
	console.log(typeOfField);
	if (typeOfField === "number") {
		arr.sort((a, b) => a[fieldName] - b[fieldName]);
		return arr;
	} else if (typeOfField === "string") {
		arr.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1));
		return arr;
	} else {
		console.log("Invalid");
		return arr;
	}
}

console.log(sortByField(students, "name"));
