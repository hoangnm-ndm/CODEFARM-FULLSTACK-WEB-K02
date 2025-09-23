function sum(a, b) {
	return a + b;
}

const sum2 = function () {
	return a + b;
};

/**
 * * 1. Declaration function
 * * 2. Expression function (hàm không có tên được gán cho 1 biến thông quá phép gán)
 * * 3. Anonymous function (hàm không tên do được dùng trong 1 ngữ cảnh cụ thể)
 * * 4. Arrow function (Hàm mũi tên)
 */

const tinhTong = (a, b) => a + b;
console.log(tinhTong(2, 4));

/**
 * * Input: (arguments)
 * * Output: => {logic thực hiện hoặc trả về}
 */

const myInfor = {
	fullname: "Nguyen Minh Hoang",
	age: 33,
};

const reTurnInfor = () => ({ fullName: "dat nguyen", age: 22 });

const returnArr = () => {
	// logic code abc
	return [1, 2, 3, 4];
};

console.log(returnArr());

function checkEven(n) {
	// * logic
	if (n % 2 === 0) {
		return true;
	}
	return false;
}

console.log(checkEven(10));
