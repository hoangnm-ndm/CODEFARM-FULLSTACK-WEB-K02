const arr1 = ["Vinh", "Thuan"];
const arr2 = ["Quoc", "Van Anh"];
const arr = [...arr1, "Binh Gold", "Mono", "J97", "Thien An", ...arr2];
console.log(arr);

const account = {
	email: "hoang@gmail.com",
	password: "123123",
};

const degree = {
	major: "IT",
	level: "university",
	score: 3.7,
};

const infor = { ...account, ...degree };

console.log(infor);
