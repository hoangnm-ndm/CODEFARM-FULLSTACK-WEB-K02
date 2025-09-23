const products = [
	{ id: 1, title: "Product A", price: 200 },
	{ id: 5, title: "Product E", price: 600 },
	{ id: 2, title: "Product B", price: 300 },
	{ id: 7, title: "Product G", price: 800 },
	{ id: 3, title: "Product C", price: 400 },
	{ id: 4, title: "Product D", price: 500 },
	{ id: 6, title: "Product F", price: 700 },
	{ id: 8, title: "Product H", price: 900 },
];

/**
 * * Viết hàm topCheapest(arr, n) lấy ra n sản phẩm giá rẻ nhất của arr (biết arr là danh sách sản phẩm).
 * * Mảng trả về đã được sắp xếp theo giá tăng dần.
 */

function topCheapest(arr, n) {
	return [...arr].sort((a, b) => a.price - b.price).slice(0, n);
}

console.log(topCheapest(products, 2));

// Kết quả mong muốn:
// [
//   { id: 1, title: "Product A", price: 200 },
//   { id: 2, title: "Product B", price: 300 },
// ]

//* Bước 1: Sắp xếp mảng theo chiều giá tăng dần
//* Bước 2: Dùng slice để cắt các phần tử có giá rẻ nhất theo yêu cầu.
