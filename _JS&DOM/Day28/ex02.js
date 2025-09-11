const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hoc xong");
  }, 2000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tot nghiep");
  }, 4000);
});

const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("di lam");
  }, 5000);
});

console.time("Promise");
promiseA
  .then((data) => {
    console.log(data);
    return promiseB;
  })
  .then((data) => {
    console.log(data);
    return promiseC;
  })
  .then((data) => {
    console.log(data);
    console.timeEnd("Promise");
  });

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
