const myPromise = new Promise((resolve, reject) => {});

console.log(myPromise);

myPromise.then();
myPromise.catch();

function User1(email, password) {
  this.email = email;
  this.password = password;
}

class User2 {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

class Promise1 {
  constructor(callback) {
    // * Những phương thức trong constructor là những phương thức tĩnh - chỉ sử dụng thông qua đối tượng
    function all() {
      console.log(this);
    }
    function race() {}
    function reject() {}
  }
}

// * Những phương thức gắn thông qua prototype là những phương thức có thể sử dụng trên instance
Promise1.prototype.then = function () {};
Promise1.prototype.catch = function () {};
Promise1.prototype.finally = function () {};
