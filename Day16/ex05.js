const arr1 = [1, 2, 4, 9, 0, 6, "CodeFarm", 8, , , , 9];
const arr2 = [0, 6, 7, 9, "CodeFarm", 6, undefined, 10, null];

/**
 * * Lọc ra các phần tử xuất hiện ở cả 2 mảng.
 * * 1. Nếu xuất hiện từ 2 lần thì chỉ đếm 1 lần.
 * * 2. Không được tính các giá trị empty và falsy (trừ số 0)
 */

/**
 * * Bước 1: Loại bỏ phần tử trùng lặp
 * * Bước 2: Loại bỏ phần tử empty và không hợp lệ (NaN, null, undefined, falsy, chuỗi rỗng)
 */

function filterDuplicate(arr) {
	const arrUnique = [];
	// * Kiểm tra xem phần tử nào của arr chưa có trong arrUnique thì push vào.
	for (let i = 0; i < arr.length; i++) {
		if (!arrUnique.includes(arr[i])) {
			arrUnique.push(arr[i]);
		}
	}
	return arrUnique;
}

function filterValid(arr) {
	// * loại bỏ phần tử không hợp lê
	return arr.filter((item) => item || item === 0);
}

function coOccurrence(arr1, arr2) {
	const cleanArr1 = filterValid(filterDuplicate(arr1));
	const cleanArr2 = filterValid(filterDuplicate(arr2));

	// * Tìm phần tử cùng xuất hiện ở cả 2 mảng và push vào mảng arr3
	const arr3 = [];
	cleanArr1.forEach((item) => {
		if (cleanArr2.includes(item)) {
			arr3.push(item);
		}
	});
	return arr3;
}

console.log("ket qua cuoi cung: ", coOccurrence(arr1, arr2));
