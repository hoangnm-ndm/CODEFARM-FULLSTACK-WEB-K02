/**
 *
 */

const products = [
	{ id: 1, name: "chuot logitech M102", price: 100, category: "hitech" },
	{ id: 2, name: "ban phim co Anko 111", price: 200, category: "hitech" },
	{ id: 3, name: "Tai nghe samsung", price: 50, category: "hitech" },
	{ id: 4, name: "ao khoac giu nhiet nam", price: 30, category: "clother" },
];

/**
 * * Xây dựng hàm sortProducts(arr, field) để sắp xếp arr theo trường dữ liệu field truyền vào
 * * 1. nếu field là string thì sắp xếp từ a-z
 * * 2. nếu field là number hoặc datetime thì sắp xếp tăng dần.
 * * 3. không được dùng Array.prototype.sort()
 */

function sortProducts(arr, field) {
	// * logic code
}

console.log(sortProducts(products, price));
