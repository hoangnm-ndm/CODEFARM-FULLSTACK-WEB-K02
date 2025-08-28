const userA = {
	fullname: "Nguyen Van A", // field (property)
	age: 18, // field (property)
	"quê quán": "Hanoi", // field (property)
	sayHello: function () {
		// method
		console.log("Hello, my name is " + this.fullname);
	},
};

console.log(userA["quê quán"]);
userA.sayHello();
