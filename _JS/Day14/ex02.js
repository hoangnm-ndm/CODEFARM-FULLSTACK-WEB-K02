const arr = [1, 2, 3, 4];

/**
 * Khai báo spread
 */

const arr2 = new Array(10);
console.log(arr2);

const arr3 = [, , 2, "hello", ,];
console.log(arr3);

console.log(typeof arr3);
console.log(Array.isArray(arr3));
console.log(arr3);

class User {
	constructor(fullname, age, email, password) {
		this.fullname = fullname;
		this.age = age;
		this.email = email;
		this.password = password;
		this.isArray = function () {
			return true;
		};
	}
}

const myInfor = new User("Nguyen Hoang", 33, "hoang@gmail.com", "1234"); // instance
