// * setTimeout(function, delay)
// * function sẽ được thực hiện sau một khoảng `delay` tính theo ms

// let timeoutID = setTimeout(
//   function (name) {
//     console.log(`hello ${name}`);
//   },
//   2000,
//   "Thay Hoang"
// );

// console.log(timeoutID);

console.log("cong viec 1");

const ID = setTimeout(function () {
  console.log("cong viec 2");
}, 0);

console.log("cong viec 3");

clearTimeout(ID);
