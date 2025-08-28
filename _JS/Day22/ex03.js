const arr = [
	{ id: 1, name: "san pham A", price: 222 },
	{ id: 2, name: "san pham B", price: 333 },
	{ id: 3, name: "san pham C", price: 444 },
	{ id: 4, name: "san pham D", price: 555 },
	{ id: 5, name: "san pham E", price: 666 },
];

function randomProducts(arr, n) {
	/**
	 * * Bước 1: kiểm tra n >=0 và <= arr.length
	 * * Bước 2: Thực hiện vòng lặp n lần.
	 * * Bước 3: Tạo ra 1 con số ngẫu nhiên là index trong khoảng từ 0 đến ar.length-1
	 * * Bước 4: Trong vòng lặp đó, sử dụng index ngẫu nhiên để lấy được phần tử ngẫu nhiên (lưu lại index này thành một mảng phụ để không lặp lại phần tử đã gặp).
	 * * Bước 5: Kiểm tra xem index đã từng xuất hiện trong mảng phụ chưa, nếu chưa, push phần tử này vào mảng đích, nếu đã có quay lại bước 3.
	 * * Return ra mảng đích
	 */

	if (typeof n !== "number" || n < 0 || n > arr.length) {
		return "Invalid!";
	}
	let number = parseInt(n);

	const result = [];
	const listIndex = [];
	function generateIndex() {
		let index = Math.floor(Math.random() * arr.length);
		const isMatch = listIndex.find((item) => item === index);
		// * Nếu trùng thì cần đệ quy
		if (isMatch !== undefined) {
			return generateIndex();
		}
		// * Nếu không tìm thấy trong mảng listIndex thì là không trùng
		listIndex.push(index);
		return index;
	}

	for (let i = 0; i < number; i++) {
		let index = generateIndex();
		result.push(arr[index]);
	}
	return result;
}

// * Input: arr, n
// * Output: Mảng con ngẫu nhiên chứa n phần tử lấy từ arr (n <= arr.length)

console.log(randomProducts(["chuoi", "dua chuot", "tao"], 0));

if (0) {
	console.log("hello");
}
