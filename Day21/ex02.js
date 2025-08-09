let myString = `Hoc lap trinh cung thay HOaNg tai 
CodeFarm:
1. Được ăn lạp xưởng
2. Được chụp hình cùng thầy Hoang
HoangThanhHuy
`;

/**
 * * 1. Thay thể mọi từ khoá "Hoang" thành từ khoá "Quoc" trong đoạn chuỗi trên.
 * * 2. Thay thế từ khoá ngay cả khi viết hoa hoặc viết thường.
 * * 3. Nếu trước hoặc sau từ khoá "Hoang" đều là dấu cách, hoặc xuống dòng, hoặc dấu câu (đây là 1 từ độc lập) thì mới thay thế bằng từ khoá "Quoc"
 */

function generateKeys(str) {
	let length = str.length;
	const result = [];

	// Hàm đệ quy để sinh tất cả các trường hợp
	function generate(current, pos) {
		if (pos === length) {
			result.push(current);
			return;
		}

		// Giữ nguyên ký tự
		generate(current + str[pos], pos + 1);

		// Nếu ký tự là chữ thường, thử đổi sang chữ hoa
		if (str[pos] >= "a" && str[pos] <= "z") {
			generate(current + str[pos].toUpperCase(), pos + 1);
		}

		// Nếu ký tự là chữ hoa, thử đổi sang chữ thường
		if (str[pos] >= "A" && str[pos] <= "Z") {
			generate(current + str[pos].toLowerCase(), pos + 1);
		}
	}

	generate("", 0);
	return result;
}

function replaceAllString(str) {
	const cases = generateKeys("hoang");
	let newStr = replaceString(str, 0, cases);
	return newStr;
}

function replaceString(str, i, cases) {
	let newStr = str.replaceAll(cases[i], "Quoc");
	i++;
	console.log(newStr);
	if (i <= cases.length) replaceString(newStr, i, cases);
	return newStr;
}

replaceAllString(myString);
// console.log(replaceAllString(myString));
