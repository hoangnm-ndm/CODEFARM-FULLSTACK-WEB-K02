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

let totalSeconds = minutes * 60;
console.log(totalSeconds);

function start() {
  let idInterval = setInterval(() => {
    // * logic cap nhat giao dien
    if (totalSeconds === 0) {
      setTimeout(() => {
        clearInterval(idInterval);
        alert("ket thuc");
      }, 100);
    }
    let phut = Number.parseInt(totalSeconds / 60);
    let giay = Number.parseInt(totalSeconds % 60);
    minute.innerText = phut;
    second.innerText = giay;
    totalSeconds--;
  }, 100);
}

btnStart.addEventListener("click", start);
