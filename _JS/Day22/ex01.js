const regex1 = /hello/i; // Mẫu 'hello' không phân biệt hoa thường
const regex2 = new RegExp("hello", "i");

console.log({ regex2 });

const text = `apple orange Apple
apple
`;
console.log(text.replace(/apple/g, "banana")); // "banana orange banana"
console.log(text.replaceAll(/apple/gi, "banana")); // "banana orange banana"
