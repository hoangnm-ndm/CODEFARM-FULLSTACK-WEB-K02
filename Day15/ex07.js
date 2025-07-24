const products = [
	{ id: 1, title: "iphone 16 promax", price: 30_000_000, quantity: 10 },
	{ id: 2, title: "1 mo rau muong", price: 10_000, quantity: 20 },
	{ id: 3, title: "macbook M4 16inch", price: 60_000_000, quantity: 2 },
];

/**
 * * Tạo ra mảng mới (dùng map) với mỗi sản phẩm thì có thêm một trường dữ liệu thể hiện tổng giá = price * quantity
 */

const result = products.map((item) => {
	// * Copy object cũ sang object mới, sau đó thay đổi trên object mới.
	return { ...item, total: item.price * item.quantity };
});

console.log(result);
console.log(products);
console.log(products === result);
