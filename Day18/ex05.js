function User(fullname, email) {
	this.fullname = fullname;
	this.email = email;
}

// * Phương thức tĩnh là phương thức được gắn vào constructor function và không đi theo instance
User.showName = function () {
	console.log(`Ten toi la: ${this.fullname}`);
};

// * Prototype: là một object được sinh ra nhằm mục đích kế thừa (extends) lại các phương thức có từ constructor function.
User.prototype.sayHello = function () {
	console.log(`Xin chao, toi la ${this.fullname}`);
};

const userA = new User("Nguyen Van A", "a@gmail.com");
// userA.sayHello = function () {
// 	console.log(`Bonjour!, ${this.fullname}`);
// };

console.log(userA);

// userA.showName();
// * x -> userA k hề kế thừa được phương thức showName() từ User, nên gặp lỗi
userA.sayHello();
console.log(userA);

// * Prototype chain
