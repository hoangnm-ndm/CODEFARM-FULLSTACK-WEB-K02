const products = [
	{ id: 1, title: "san pham A", price: 200, quantity: 2 },
	{ id: 2, title: "san pham B", price: 50, quantity: 4 },
];

// class Cart {
//   constructor(userId, products) {
//     this.userId = userId;
//     this.products = products;
//     this.total = function () {
//       const result = this.products.reduce((acc, cur) => {
//         acc += cur.price * cur.quantity;
//         return acc;
//       }, 0);
//       return result;
//     };
//   }
//   tinhtong() {
//     const result = this.products.reduce((acc, cur) => {
//       acc += cur.price * cur.quantity;
//       return acc;
//     }, 0);
//     return result;
//   }
// }

function Cart(userId, products) {
	this.userId = userId;
	this.products = products;
	this.total = function () {
		const result = this.products.reduce((acc, cur) => {
			acc += cur.price * cur.quantity;
			return acc;
		}, 0);
		return result;
	};
}

Cart.prototype.tinhtong = function () {
	const result = this.products.reduce((acc, cur) => {
		acc += cur.price * cur.quantity;
		return acc;
	}, 0);
	return result;
};

const cartForUserA = new Cart("abcxyz", products);

console.log(cartForUserA);
console.log(cartForUserA.total());
console.log(cartForUserA.tinhtong());
