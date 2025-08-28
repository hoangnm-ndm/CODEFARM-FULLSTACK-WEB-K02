const arr = [1, 2, 3, [4, 5, [[[[[[[[[6]]]]]]]]]]];

// const result = arr.flat(Infinity);
// console.log(result);

/**
 * * Không dùng Array.flat(), hãy làm phẳng mảng bất kỳ.
 */

function flatArr(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			let itemFlat = flatArr(arr[i]);
			for (let j = 0; j < itemFlat.length; j++) {
				result.push(itemFlat[j]);
			}
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(flatArr(arr));

/**
 * * Bước 1: Duyệt qua từng phần tử của mảng, kiểm tra xem phần tử đó có phải array không?
 * * Bước 2: Nếu không là array -> push vào mảng result.
 * * Bước 3: Nếu nó là array -> thì đệ quy (quay lại bước 1)
 */

Array.isArray();
