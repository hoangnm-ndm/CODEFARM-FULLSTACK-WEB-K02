const students = [
	{ id: 1, name: "Phuc Lam", age: 24 },
	{ id: 2, name: "Huu Lam", age: 22 },
	{ id: 3, name: "Thuan", age: 21 },
	{ id: 4, name: "Van Anh", age: 19 },
];

/**
 * * Viết hàm filterStudent()
 * * 1. Nhận vào mảng dánh sách sinh viên
 * * 2. Trả về 2 mảng mới arr1, arr2 với arr1 là danh sách sinh viên có tuổi từ đủ 20. arr2 là danh sách sinh viên thuộc phần còn lại.
 */

// * Input là gì?:

// * Output là gì?:

function filterStudent(arr) {
	const arr1 = [],
		arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].age >= 20) {
			arr1.push(arr[i]);
		} else {
			arr2.push(arr[i]);
		}
	}
}
