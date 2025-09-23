function hello(count) {
	count++;
	if (count <= 5) {
		console.log(`Hello ${count}`);
		hello(count);
	}
}

hello(1);

/**
 * * In ra từ 1 đến n mà không dùng vòng lặp
 */

function printNumber(n) {}

printNumber(10);
