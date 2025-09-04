/**
 * * Xây dựng giao diện đồng hồ bấm giờ như sau:
 * * 1. Nhập số phút từ prompt (số phút > 0)
 * * 2. Nút bấm bắt đầu để bật đếm giờ. giao diện cập nhật theo từng giây (MM:SS\)
 * * 3. Khi thời gian kết thúc, dừng đếm giờ và bật hộp thoại alert("ket thuc!")
 */

const btnStart = document.getElementById("btn-start");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let minutes = Math.abs(Number.parseInt(prompt("Nhap so phut!")));

minute.innerText = minutes;

function start() {
  // * Bắt đầu tính giờ
  console.log("bat dau");
  // * cập nhật lại giao diện sau mỗi giây
  // * Nếu như thời gian === 0 thì dừng cập nhật và bật alert("ket thuc")

  let idInterval = setInterval(() => {
    // * logic cap nhat giao dien
  }, 1000);

  if (Number(second.innerText) === 0 && Number(minute.innerText) === 0) {
    clearInterval(idInterval);
    alert("ket thuc");
  }
}

btnStart.addEventListener("click", start);
