const arr1 = [1, "Quoc", "Dat", "Vinh", "Phuong", "Thuan"];

const firstStudent = arr1[0];
const secondStudent = arr1[1];

const [first, second, ...rest] = arr1;

// console.log(first);
// console.log(second);
// console.log(rest);

const obj1 = {
	id: 1,
	products: [
		{
			id: 168,
			title: "Charger SXT RWD",
			price: 32999.99,
			quantity: 3,
			total: 98999.97,
			discountPercentage: 13.39,
			discountedTotal: 85743.87,
			thumbnail: "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
		},
		{
			id: 78,
			title: "Apple MacBook Pro 14 Inch Space Grey",
			price: 1999.99,
			quantity: 2,
			total: 3999.98,
			discountPercentage: 18.52,
			discountedTotal: 3259.18,
			thumbnail:
				"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
		},
		{
			id: 183,
			title: "Green Oval Earring",
			price: 24.99,
			quantity: 5,
			total: 124.94999999999999,
			discountPercentage: 6.28,
			discountedTotal: 117.1,
			thumbnail: "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
		},
		{
			id: 100,
			title: "Apple Airpods",
			price: 129.99,
			quantity: 5,
			total: 649.95,
			discountPercentage: 12.84,
			discountedTotal: 566.5,
			thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
		},
	],
	total: 103774.85,
	discountedTotal: 89686.65,
	userId: 33,
	totalProducts: 4,
	totalQuantity: 15,
};

const { userId: idNguoiDung, totalQuantity, address, ...other } = obj1;

console.log(idNguoiDung); // 33
console.log(totalQuantity);
console.log(total);
console.log(other);
console.log(address);

/**
 * ! destructuring - Phân rã
 * * destructuring là cú pháp khai báo nhiều biến hoặc lấy ra nhiều key của object để thành các biến riêng lẻ trong 1 lần gán.
 * * destructuring có thể coi là hành vi phá vỡ vỏ bọc của khối hộp để lấy ra các phần tử con bên trong.
 *
 *
 * ! (...) - Gom lại
 * * rest được goi là phần còn lại khi destructuring hoặc truyền tham số vào hàm
 * * - rest được coi là cách để gom lại các phần tử hoặc thuộc tính của mảng (hoặc đối tượng).
 * * - rest luôn được khai báo ở cuối destructuring hoặc khi truyền tham số vào hàm.
 *
 *
 * ! (spread) - Trải ra
 * * spread được sử dụng để trải các phần tử, thuộc tính của mảng, đổi tượng đã có vào một khai báo, định nghĩa khác.
 * * - spread có thể được sử dụng ở bất cứ vị trí nào trong object, array literal
 */
