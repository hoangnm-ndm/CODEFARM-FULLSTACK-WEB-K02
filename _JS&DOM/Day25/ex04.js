/**
 * * Xây dựng giao diện đồng hồ bấm giờ như sau:
 * * 1. Nhập số phút từ prompt (số phút > 0)
 * * 2. Nút bấm bắt đầu để bật đếm giờ. giao diện cập nhật theo từng giây (MM:SS\)
 * * 3. Khi thời gian kết thúc, dừng đếm giờ và bật hộp thoại alert("ket thuc!")
 */

let minutes = Number.parseInt(prompt("Nhap so phut!"));
const btnStart = document.getElementById("btn-start");
const clock = document.getElementById("clock");

function start() {
  // *Bắt đầu tính giờ
}

function renderUI(timer) {
  // * cập nhật lại giao diện sau mỗi giây
}

btnStart.addEventListener("click", start);
