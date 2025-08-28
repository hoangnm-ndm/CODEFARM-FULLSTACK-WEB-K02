const arr1 = [1, 2, 4, 12, 4];

console.log(arr1);

Array.prototype.map2 = function () {
	console.log("hello, day la phuong thuc toi them vao");
};

arr1.map2();

/**
 * Array
 * Object
 * String
 * Number
 * Date
 * Symbol
 * Set
 * Map
 * Regex
 * Error
 */

Array.prototype.find2 = function (callback) {
	// * tìm phần tử đầu tiên thoả mãn callback
	for (let i = 0; i < this.length; i++) {
		console.log(callback);
		if (callback(this[i], i)) {
			return this[i];
		}
		// * đưa logic của callback vào đây để thực thi cho từng phần tử this[i]
	}
	return undefined;
	// console.log(callback);
	// console.log(typeof callback);
};

const result = arr1.find2((item, index) => item > 2);
console.log(result);

const result2 = arr1.find2((item) => item % 3 === 0);
console.log(result2);
