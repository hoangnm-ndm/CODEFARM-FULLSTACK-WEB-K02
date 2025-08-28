// let i = 0;

// while (i < 10) {
// 	console.log("i:", i);
// 	i++;
// }

// let j = 0;
// for (; j < 10; ) {
// 	console.log("j:", j);
// 	j++;
// }

// let i = 0;

// let count = 0;
// while (i <= 100) {
// 	console.log(i++);
// 	count++;
// 	i += 2;
// }

// console.log(count);

// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 0);

for (let i = 1; i <= 10; i++) {
	if (i % 2 !== 0) {
		continue;
	}
	console.log(i);
}

// * In ra các số chẵn từ 1 đến 10 với for loop

// * In ra số nguyên tố lớn  nhất nhỏ hơn n.

/**
 * * Bước 1: Tạo vòng lặp với biến đếm i đếm lùi từ n về 2
 * * Bước 2: Nếu i là số nguyên tố, dừng luôn
 * * Bước 3: Nếu i không là số nguyên tố thì lùi tiếp
 */

function printPrimeNumber(n) {}
