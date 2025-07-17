// Input:
function calcBMI(weight, height) {
	// logic
	if (Number.isNaN(weight) || Number.isNaN(height)) {
		console.log("chieu cao hoac can nang khong dung kieu du lieu");
	}

	if (weight <= 0 || height <= 0) {
		console.log("chieu cao hoac can nang khong the no hon hoac bang 0");
	}

	let BMI = weight / height ** 2;

	if (BMI < 18.5) {
		console.log(`BMI = ${BMI}, Thiếu cân`);
	} else if (18.5 <= BMI && BMI < 23) {
		console.log(`BMI = ${BMI}, Bình thường`);
	} else if (BMI >= 25) {
		console.log(`BMI = ${BMI}, Béo phì`);
	} else {
		console.log(`BMI = ${BMI}, Thừa cân`);
	}

	switch (true) {
		case BMI < 18.5:
			console.log(`BMI = ${BMI}, Thiếu cân`);
			return;
		case BMI >= 18.5 && BMI < 23:
			console.log(`BMI = ${BMI}, Bình thường`);
			return;
		case BMI >= 23 && BMI < 25:
			console.log(`BMI = ${BMI}, Thừa cân`);
			return;
		default:
			console.log(`BMI = ${BMI}, Béo phì`);
	}
}

// const h = Number(prompt("Moi nhap vao chieu cao (met)"));
// const w = Number(prompt("Moi nhap vao can nang (kg)"));

// Output:
// calcBMI(w, h);

/**
 * * Dùng if else khi:
 * * - có ít hơn hoặc tối đa 3 trường hợp (case).
 * * - khi không có giá trị đúng cụ thể (có thể là khoảng giá trị)
 *
 * * Dùng switch case khi:
 * * - khi có nhiều trường hợp xẩy ra (case).
 * * - Khi có các giá trị cụ thể cho các case.
 */

// const myDate = new Date("2025-07-15");

// console.log(myDate.getDay()); // thu 3
// console.log(new Date("2025-07-14").getDay()); // thu 2
// console.log(new Date("2025-07-13").getDay()); // Chu nhat

/**
 * * Viết hàm nhập vào thời gian theo định dạng yyyy-mm-dd và in ra ngày đó là thứ mấy?
 */

function getDay(stringDay) {
	let day = new Date(stringDay).getDay();
	switch (day) {
		case 0:
			console.log("Chu nhat");
			break;

		case 1:
			console.log("Thu 2");
			break;

		case 2:
			console.log("Thu 3");
			break;

		case 3:
			console.log("Thu 4");
			break;

		case 4:
			console.log("Thu 5");
			break;

		case 5:
			console.log("Thu 6");
			break;

		default:
			console.log("Thu 7");
	}
}

getDay("2026-01-01"); // Chủ nhật

new Date().getDay();
