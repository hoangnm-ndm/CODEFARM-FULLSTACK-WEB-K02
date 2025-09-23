const arr = ["Hoang", "Huy", "Dat", "Dung"];

const result = arr.splice(0, 100, "Quoc");

console.log(result);
console.log(arr);

/**
 * * splice(start, deleledCount, ...elements)
 * * start: vị trí bắt đầu thay đổi
 * * deletedCount: số lượng phần tử bớt đi
 * * elements: Các phần tử mới thêm vào
 * * trả về mảng phần tử bị lược bỏ
 * * thay đổi mảng gốc
 * *
 */
