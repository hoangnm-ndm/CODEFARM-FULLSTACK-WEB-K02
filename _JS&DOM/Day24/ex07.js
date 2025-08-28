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
