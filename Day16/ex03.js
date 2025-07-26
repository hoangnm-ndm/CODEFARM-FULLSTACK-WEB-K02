const products = [
	{ id: 1, name: "chuot logitech M102", price: 100, category: "hitech" },
	{ id: 2, name: "ban phim co Anko 111", price: 200, category: "hitech" },
	{ id: 3, name: "Tai nghe samsung", price: 50, category: "hitech" },
	{ id: 4, name: "ao khoac giu nhiet nam", price: 30, category: "clother" },
];

// * Dùng filter để lọc lấy các sản phẩm thuộc danh mục "hitech" và price >= 100

const filterProducts = products.filter((item) => item.category === "hitech" && item.price >= 100);

console.log(filterProducts);
