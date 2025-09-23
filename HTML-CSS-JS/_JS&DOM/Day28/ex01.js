/**
 * * 1. callback
 *  -> Truyền một hàm vào một hàm khác dưới dạng tham số.
 * * 2. promise
 * * 3. async/await
 */

function A(callback) {
  setTimeout(() => {
    console.log("hoc xong");
    callback();
  }, 2000);
}
function B(callback) {
  setTimeout(() => {
    console.log("tot nghiep");
    callback();
  }, 1000);
}
function C() {
  setTimeout(() => {
    console.log("di lam");
  }, 500);
}

A(() => B(() => C()));

// * hoc -> tot nghiep -> di lam

// * callback hell

// * bất đồng bộ và xử lý bất đồng bộ -> đồng bộ.
/**
 * * JS là ngôn ngữ đơn luồng (single thread) hay đa luồng (mutil thread) -> JS là đơn luồng
 * * JS là đồng bộ hay bất đồng bộ -> JS là ngôn ngữ đồng bộ khi không sử dụng các effect, các web api, Nhưng JS xử lý bất đồng bộ với các web API như fetch, setTimeout, .v.v
 */
