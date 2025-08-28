const cart = [
	{ id: 1, name: "Product A", price: 200, quantity: 2 },
	{ id: 2, name: "Product B", price: 100, quantity: 1 },
	{ id: 3, name: "Product C", price: 300, quantity: 3 },
	{ id: 4, name: "Product D", price: 50, quantity: 5 },
];

/**
 * * In ra bảng chi tiết cart.
 * * Bổ sung tổng tiền từng sản phẩm.
 * * Cuối bảng in ra tổng tiền tất cả sản phẩm (tfood).
 * * Với mỗi sản phẩm không muốn mua nữa, thêm nút xóa.
 * * Với những sản phẩm có giá từ đủ 200 trở lên, tô chữ màu đỏ.
 * * Khi bấm nút xóa, xóa sản phẩm khỏi giỏ hàng (cập nhật lại giao diện).
 * * Khi bấm nút tăng giảm số lượng, cập nhật lại số lượng và tổng tiền từng sản phẩm, tổng tiền tất cả sản phẩm (số lượng không nhỏ hơn 1)
 *
 */

const cartTable = document.querySelector(".tbody-card");

function renderCart(cart) {
	let total = 0;
	cartTable.innerHTML = "";
	cart.forEach((item) => {
		const itemTotal = item.price * item.quantity;
		total += itemTotal;

		const row = document.createElement("tr");
		row.innerHTML = /*html*/ `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td style="color: ${item.price >= 200 ? "red" : "black"}">$${item.price}</td>
        <td>
            <button class="decrease" data-id="${item.id}">-</button>
            ${item.quantity}
            <button class="increase" data-id="${item.id}">+</button>
        </td>
        <td>$${itemTotal}</td>
        <td><button class="btn btn-danger delete" data-id="${item.id}">Xóa</button></td>
    `;

		cartTable.appendChild(row);
	});

	const totalRow = document.createElement("tr");
	totalRow.innerHTML = /*html*/ `
      <td colspan="4">Tổng tiền tất cả sản phẩm</td>
      <td colspan="2">$${total}</td>
  `;
	cartTable.appendChild(totalRow);

	// Thêm sự kiện cho nút xóa
	document.querySelectorAll(".delete").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = parseInt(e.target.getAttribute("data-id"));
			const index = cart.findIndex((item) => item.id === id);
			if (index !== -1) {
				cart.splice(index, 1);
				renderCart(cart);
			}
		});
	});

	// Thêm sự kiện cho nút tăng
	document.querySelectorAll(".increase").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = parseInt(e.target.getAttribute("data-id"));
			console.log({ id });
			const item = cart.find((item) => item.id === id);
			if (item) {
				item.quantity += 1;
				renderCart(cart);
			}
		});
	});

	// Thêm sự kiện cho nút giảm
	document.querySelectorAll(".decrease").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = parseInt(e.target.getAttribute("data-id"));
			console.log({ id });
			const item = cart.find((item) => item.id === id);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
				renderCart(cart);
			}
		});
	});
}

renderCart(cart);
