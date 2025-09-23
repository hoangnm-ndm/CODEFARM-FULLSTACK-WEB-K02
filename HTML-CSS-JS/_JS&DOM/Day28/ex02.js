function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hoc xong");
    }, 2000);
  });
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tot nghiep");
    }, 3000);
  });
}

function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("di lam");
    }, 4000);
  });
}

console.time("Promise");
A()
  .then((data) => {
    console.log(data);
    return B();
  })
  .then((data) => {
    console.log(data);
    return C();
  })
  .then((data) => {
    console.log(data);
    console.timeEnd("Promise");
  })
  .catch((err) => {
    console.log(err);
  });

// * fetch("https://abc.com/products").then().then().catch()

// * promise chain

// const promiseF = new Promise((resolve, reject) => {
//   //   resolve("thanh cong roi!");
//   reject("failed!");
//   // * producing code -> vd: fetch
// });

// promiseF
//   .then((data) => {
//     console.log(`thay hoang oi, ${data}`);
//     // * consuming code -> render UI
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hoc xong");
  }, 2000);
});

console.log(myPromise);
