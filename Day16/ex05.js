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
