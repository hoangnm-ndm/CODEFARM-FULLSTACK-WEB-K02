const h2Element = document.createElement("h2");
h2Element.innerText = "ThayHoangJS";
console.log(h2Element);

document.body.appendChild(h2Element);

const studentList = [
	{ id: 1, name: "Vân Anh", skill: "HTML - CSS" },
	{ id: 2, name: "Vinh", skill: "JS" },
	{ id: 3, name: "Phúc", skill: "ReactJS" },
	{ id: 4, name: "Toro", skill: "Hất tung" },
];

/**
 * * Hiển thị danh sách học viên cho trước và skill của họ lên màn hình bằng thao tác DOM. Sử dụng ol, li
 * * Gợi ý: Dùng for hoặc forEach, map để duyệt qua mảng.
 */

// * Bước 1: Tạo ra thẻ ol
let olElement = document.createElement("ol");

studentList.forEach((item) => {
	// * Bước 2:
	// * Tạo ra thẻ li và thêm nội dung cho thẻ li
	// * AppendChild li vào cha là ol
	let li = document.createElement("li");
	li.innerText = `${item.name} - ${item.skill}`;
	olElement.appendChild(li);
});

// * Bước 3: Mang ol gắn vào document.body
document.body.appendChild(olElement);
