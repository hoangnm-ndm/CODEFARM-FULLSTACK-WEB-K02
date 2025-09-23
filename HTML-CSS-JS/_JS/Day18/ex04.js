function User(fullname, email) {
	this.fullname = fullname;
	this.email = email;
}

User.showName = function () {
	console.log(`Ten toi la: ${this.fullname}`);
};

// * Phương thức tĩnh là phương thức được gắn vào constructor function và không đi theo instance

const userA = new User("Nguyen Van A", "a@gmail.com");

console.log(userA);

User.showName(userA); // fullname = undefined

/**
 * * Một số phương thức tĩnh phổ biến của Object
 * * Object.keys() - Lấy ra mảng các key của object
 * * Object.values() - lấy ra mảng các value của object
 * * Object.entries() - lấy ra mảng các cặp key-value được gom theo mảng.
 * * Object.assign() - sao chép lại toàn bộ thuộc tính và phương thức của object nguồn sang một object đích và có thể bổ sung các thuộc tính, phương thức mới, nếu trùng thuộc tính thì object đích sẽ bị ghi đè.
 * * Object.freezes() - đóng băng object
 */

const obj2 = {
	name: "Hoang",
	address: "HN",
	hello: function () {
		console.log(`hello, minh la ${this.name}`);
	},
};
console.log(obj2);
obj2.hello();

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));
const obj3 = Object.assign({ age: 34 }, obj2);
console.log(obj3);

const property1 = { a: "Hoang", b: "Vinh" };
const property2 = { c: "Quoc", b: "Thuan" };

const property3 = Object.assign(property1, property2);

console.log(property3);

const objFreezes = Object.freeze({ path: "/login" });
objFreezes.path = "/register";
console.log(objFreezes);
