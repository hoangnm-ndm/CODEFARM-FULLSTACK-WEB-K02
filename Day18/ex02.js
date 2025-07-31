const obj1 = { name: "hoang", address: "HN" }; // * object literal
console.log(obj1);
console.log(obj1.address);

let major = "IT";

obj1.major = major;

const obj2 = { name: "Minh", major };
// * shorthand property - viết tắt key - value khi value là tên biến trùng với key.

let address = "địa chỉ";

obj2[address] = "HN"; // *computed property
obj2["giới tính"] = "nam"; // *computed property
obj2["giới tính"] = "nữ";

obj2["giới tính"] = undefined;

// * JSON = Javascript Object Notation

console.log(JSON.parse(JSON.stringify(obj2))); // * Cách xoá key bằng mẹo
//* JSON không xử lý các value là undefined, method

delete obj2.major; // * xoá thuộc tính
console.log(obj2);

const obj4 = {
	name: "mitsubitshi Xforce",
	price: 700_000_000,
	color: "red",
};

for (const key in obj4) {
	console.log(`${key}: ${obj4[key]}`);
}

// * không thể dùng for...of với object
const arr = ["Hoang", "Vinh", "Thinh"];

// * Nhưng hoàn toàn có thể dùng for...in với array (duyệt qua các index) -> Cách này không khuyến khích
for (const key in arr) {
	console.log(key);
}

/**
 * * shorthand property - cho phép viết tắt key- value khi value là 1 biến trùng tên với key
 * * computed property cho phép đặt tên key từ giá trị của biến hoặc chuỗi đặc biệt.
 * * dùng for...in đề duyệt qua key của object,
 * * xoá thuộc tính bằng `delete`
 */
