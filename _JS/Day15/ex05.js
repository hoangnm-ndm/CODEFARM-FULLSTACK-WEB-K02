function kiemTien(callback) {
	console.log("dang kiem tien");
	setTimeout(() => {
		console.log("Kiem du 10000000");
		callback();
	}, 3000);
}

function muaDienThoai() {
	console.log("mua dien thoai");
}

kiemTien(muaDienThoai);
