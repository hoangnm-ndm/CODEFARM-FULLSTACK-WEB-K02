// * JSON = JavaScript Object Notation
// * Là một định dạng chuỗi có cấu trúc.
// * Trong JS thì có 2 phương thức phổ biến để chuyển đổi qua lại giữa JSON <-> JS

// * JSON không hỗ trợ function, MAP, SET, undefined

let obj = {
  name: "Hoang",
  age: 33,
  makeMoney: function () {
    console.log("Kien tien");
  }, // function không được hỗ trợ
  gender: undefined, // undefined không được hỗ trợ
  map: new Map(),
  set: new Set([1, 2, 3]), // MAP, SET thành Objec rỗng.
  nullValue: null,
};

let json = JSON.stringify(obj);

console.log(json);
console.log(typeof json);
console.log(JSON.parse(json));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// client <-> server
