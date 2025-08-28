let myName = "Nguyen Minh Hoang";
myName = "Nguyen Truc Anh";
myName[14] = "g";
console.log(myName);
for (let i = 0; i < myName.length; i++) {
	console.log(myName[i]);
}

/**
 * * Chuỗi là bất biến (immutable), có thể gán lại giá trị cho biến với khai báo `let` tuy nhiên không thể cập nhật 1 phần của chuỗi.
 * * Truy cập ký tự của chuỗi thông qua chỉ số (index)
 */

// console.log(myName);

let b = new String("CodeFarm");
let c = new String(10);
let d = new String(true);
console.log(b);
console.log(c);
console.log(d);

/**
 * * at, charAt
 * * concat
 * * starstWith, endsWith
 * * substring
 * * toLowerCase, toUpperCase
 * * trim, trimStart, trimEnd
 * * replace, replaceAll
 * * repeat
 * * slice
 * * search
 * * indexOf
 * * includes
 */

console.log("Hoang".at(-2)); // Lấy ký tự theo index (dùng được với chỉ số âm)
console.log("Hoang"[1]); // không dùng được với chỉ số âm

console.log("Hoang".charAt(100)); // Lấy ký tự theo chỉ số, nếu âm hoặc number index truyền vào ngoài phạm vi thì trả về chuỗi rỗng

const str = "Hello World";
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("Hello", 6)); // Output: false
console.log(str.startsWith("world")); // Output: false (phân biệt hoa thường)
