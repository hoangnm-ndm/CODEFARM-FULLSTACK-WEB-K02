let counter = 0;

const intervalID = setInterval(() => {
  console.log(`counter: ${counter++}`);
}, 1000);

console.log(intervalID);

// * Xây dựng đồng hồ đếm thời gian thực hiển thị giao diện lên màn hình với định dạng HH:MM:SS

// * Bước 1: Lấy thời gian hiện tại ra, new Date(), Date.now()
// * Bước 2: getHours, getMinutes, getSeconds
// * Bước 3: Thực hiện nối chuỗi lại theo đúng cấu trúc HH:MM:SS
// * Bước 4: Đưa nội dung này vào DOM
// * Bước 5: Đưa toàn bộ code vào setInterval

setInterval(() => {
  const timer = new Date();
  document.body.innerHTML = `${timer.getHours()}:${timer.getMinutes()}:${timer.getUTCSeconds()}`;
}, 1000);
