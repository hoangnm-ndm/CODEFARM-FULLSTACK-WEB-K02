/**
 * * some
 *  */

const users = [
	{ id: 1, name: "Huy", gender: "male" },
	{ id: 2, name: "Van Anh", gender: "female" },
	{ id: 3, name: "Nam", gender: "other" },
];
// * Kiểm tra xem trong users có bạn nữ nào không/
console.log(users.some((item) => item.gender === "female"));

// * Kiểm tra xem users có phải toàn nữ hay không?
console.log(users.every((item) => item.gender === "female"));
