const students = [
	{ id: 1, name: "Vinh", address: "Suoi Hai" },
	{ id: 2, name: "Phuong", address: "Dai Xuyen" },
	{ id: 3, name: "Hoang", address: "Bac Ninh" },
	{ id: 4, name: "Quang", address: "Suoi Hai" },
	{ id: 5, name: "Thuan", address: "Quang Bi" },
	{ id: 6, name: "Thinh", address: "Quang Bi" },
];

const result = students.reduce((acc, cur) => {
	if (!acc[cur.address]) {
		// * Nếu chưa có địa chỉ đó trong object đích thì tạo ra với giá trị là []
		acc[cur.address] = [];
	}

	// * push thêm phần tử vào acc[cur.address]
	acc[cur.address].push(cur);

	return acc;
}, {});

console.log(result);

/**
 * * Dùng reduce để phân nhóm các học viên theo quê quán.
 */

/*
 * output:
{
  "quang bi": [
    { id: 6, name: "Thinh", address: "Quang Bi" }
  ]
}
 */
