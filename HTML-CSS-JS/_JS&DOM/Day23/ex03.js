const studentList = [
	{ id: 1, name: "Vân Anh", skill: "HTML - CSS", star: 5 },
	{ id: 2, name: "Vinh", skill: "JS", star: 4 },
	{ id: 3, name: "Phúc", skill: "ReactJS", star: 4 },
	{ id: 4, name: "Toro", skill: "Hất tung", star: 1 },
];

let olElement = document.createElement("ol");
olElement.innerHTML = studentList
	.map((item) => {
		return `<li>${item.name} - ${item.skill}</li>`;
	})
	.join("");
document.body.appendChild(olElement);

// * Xây dựng bảng đầy đủ các thuộc tình của các thành viên lấy từ mảng studentList.
