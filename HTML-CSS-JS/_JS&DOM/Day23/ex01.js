/**
 * * Document object model (DOM): Mô hình hoá tài liệu dạng đối tượng.
 * * Element node: các phương thức và thuộc tính tương tác với element node
 * * attribute node:
 * * text node:
 */

const myDocument = {
	html: {
		head: {
			title: "CodeFarm",
		},
		body: {
			h1: {
				content: "Hoc lap trinh",
			},
			ol: {
				li: {
					content: "Hoc khai bao bien",
				},
			},
		},
	},
};

console.log(myDocument);

const h1Element1 = document.getElementById("title");
const h1Element2 = document.getElementsByTagName("h1")[0]; // HTMLCollection - bộ sưu tập các thẻ html
const h1Element3 = document.getElementsByName("h1-name")[0]; // NodeList - danh sách các node trong DOM
const h1Element4 = document.getElementsByClassName("tieuDe")[0]; // HTML Collection

// querySelector/querySelectorAll

console.log(h1Element1);
console.log(h1Element2);
console.log(h1Element3);
console.log(h1Element4);
// console.log(h1Element1);

//* Thực hiện truy vấn DOM để lấy ra phần tử có class là "item" ở trong phần tử có class là "container"

let containerElement = document.getElementsByClassName("container")[0];
console.log(containerElement.getElementsByClassName("item")[0]);

let itemElement = document.querySelector("div.container > .item");
console.log(itemElement);

let itemList = document.querySelectorAll(".container > .item");

console.log(itemList);
