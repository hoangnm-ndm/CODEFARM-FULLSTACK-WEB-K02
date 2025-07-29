const students = [
	{ id: 1, name: "Vinh", address: "Suoi Hai" },
	{ id: 2, name: "Phuong", address: "Dai Xuyen" },
	{ id: 3, name: "Hoang", address: "Bac Ninh" },
	{ id: 4, name: "Quang", address: "Suoi Hai" },
	{ id: 5, name: "Thuan", address: "Quang Bi" },
	{ id: 6, name: "Thinh", address: "Quang Bi" },
];

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
