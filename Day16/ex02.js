/**
 * * find, findLast (trả về phần tử đầu tiên hoặc cuối cùng thoả mãn callback - phù hợp để tìm đối tượng trong mảng)
 * * findIndex, findLastIndex (trả về vị trí của phần tử đầu tiên hoặc cuối cùng thoả mãn callback - phù hợp để tìm vị trí của đối tượng trong mảng)
 * filter
 * some
 * every
 * * includes (tìm và trả về true/false theo giá trị tìm kiếm)
 * * indexOf, lastIndexOf (Trả về vị trí của phần tử đầu tiên hoặc cuối cùng bằng với giá trị đang tìm)
 *
 * reduce
 * sort
 */

const students = [
	{ id: 1, name: "Hoang", score: 2 },
	{ id: 2, name: "Thinh", score: 6 },
	{ id: 3, name: "Vinh", score: 9 },
	{ id: 4, name: "Huy", score: 4 },
];

console.log(students.find((item) => item.score < 5));
console.log(students.findLast((item) => item.score < 5));

console.log(students.findIndex((item) => item.score < 5));
console.log(students.findLastIndex((item) => item.score < 5));

const animals = ["camel", "dog", "cat", "elephant", "cat"];

// console.log(animals.indexOf("cat"));
// console.log(animals.indexOf("cat", 3));
// console.log(animals.lastIndexOf("cat"));
// console.log(animals.includes("bufterfly"));

const roles = ["superAdmin", "admin"];
function restrictTo(user, roles) {
	// * Kiểm tra user có role (vai trò) trong danh sách vai trò được cấp phép (roles) không?

	if (!user.role || !roles.includes(user.role)) {
		console.error("ban khong co quyen!");
		return;
	}
	console.log("Moi ban di tiep");
}

const studentA = {
	name: "Nguyen Minh Hoang",
	role: "teacher",
};
restrictTo(studentA, ["superAdmin", "teacher"]);
