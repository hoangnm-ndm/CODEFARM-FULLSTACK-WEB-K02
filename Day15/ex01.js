const arr = ["banana", "apple", "orange", "kiwi"];

const result = arr.slice(1, 3);
console.log(result);
console.log(arr.slice());

const result2 = arr.slice();
console.log(result2);
result2.push("tomato");
console.log(arr);
console.log(result2);
console.log(arr === result2);

const result3 = arr.slice(-3, -1);
console.log(result3);

/**
 * * slice(start: end)
 * * start: vị trí bắt đầu cắt
 * * end: vị trí kết thúc cắt
 * * tạo ra mảng mới là con của mảng cũ,
 * * không thay đổi mảng gốc
 * * chấp nhận chỉ số âm.
 *  */
