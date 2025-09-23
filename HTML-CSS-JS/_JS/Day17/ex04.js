// const arr = [1, 2, 3, 4];

// const result = arr.reduce((pre, cur, index, arr) => {
// 	console.log({ pre, cur, index, arr });
// 	return pre + cur;
// }, 10);

// console.log(result);

const products = [
	{ id: 1, title: "Product A", price: 200, quantity: 1 },
	{ id: 5, title: "Product E", price: 600, quantity: 2 },
	{ id: 2, title: "Product B", price: 300, quantity: 4 },
	{ id: 7, title: "Product G", price: 800, quantity: 5 },
	{ id: 3, title: "Product C", price: 400, quantity: 1 },
	{ id: 4, title: "Product D", price: 500, quantity: 10 },
	{ id: 6, title: "Product F", price: 700, quantity: 12 },
	{ id: 8, title: "Product H", price: 900, quantity: 3 },
];

const total = products.reduce((acc, cur) => (acc += cur.price * cur.quantity), 0);
console.log(total);

/**
 * * Trong các tính toán với [] chứa nhiều object, nên sử dụng initialValue để xác định kiểu dữ liệu trả về,
 * * Nếu không có initialValue thì accumulator sẽ có kiểu dữ liệu của phần tử trong mảng.
 */
