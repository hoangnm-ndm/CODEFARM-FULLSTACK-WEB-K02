const studentList = [
	{ id: 1, name: "Vân Anh", skill: "HTML - CSS", star: 5 },
	{ id: 2, name: "Vinh", skill: "JS", star: 4 },
	{ id: 3, name: "Phúc", skill: "ReactJS", star: 4 },
	{ id: 4, name: "Toro", skill: "Hất tung", star: 1 },
];

let content = /*html*/ `<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Skill</th>
					<th>Star</th>
				</tr>
			</thead>
			<tbody>`;
studentList.forEach((item) => {
	const tr = /*html*/ `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.skill}</td>
      <td>${item.star}</td>
    </tr>
  `;
	content += tr;
});

content += `</tbody></table>`;
document.body.innerHTML = content;

// const tdList = document.getElementsByTagName("td");

// console.log(tdList);

// for (let i = 0; i < tdList.length; i++) {
// 	tdList[i].style.cssText = "border: 1px solid red;";
// }
