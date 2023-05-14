// Bài tập 1
var tongDiem = 0;
var diemChuan = 0;
var diemCong = 0;
var diemKV = 0;
var diemDT = 0;
var ketQua = "";

document.getElementById("tinhDiem").onclick = function () {
  diemChuan = document.getElementById("diemChuan").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  diemKV = document.getElementById("khuVuc").value * 1;
  diemDT = document.getElementById("doiTuong").value * 1;
  diemCong = diemKV + diemDT;
  tongDiem = diem1 + diem2 + diem3 + diemCong;

  if (tongDiem >= diemChuan) {
    ketQua = "Bạn đã đậu! " + "Tổng điểm của bạn là: " + tongDiem;
  } else {
    ketQua = "Bạn đã rớt! " + "Tổng điểm của bạn là: " + tongDiem;
  }

  document.getElementById("ketQua").innerHTML = ketQua;
};

// Bài tập 2
const giaMuc1 = 500;
const giaMuc2 = 650;
const giaMuc3 = 850;
const giaMuc4 = 1100;
const giaMuc5 = 1300;
var tienDien1 = 0;
var tienDien2 = 0;
var tienDien3 = 0;
var tienDien4 = 0;
var tienDien5 = 0;
var tongTien = 0;
document.getElementById("tinhTien").onclick = function () {
  tongTien = 0;
  var name = document.getElementById("name").value;
  var chiSoDien = document.getElementById("number").value;

  tinhTongTien(chiSoDien, giaMuc1, giaMuc2, giaMuc3, giaMuc4, giaMuc5);

  document.getElementById("thongBao").innerHTML =
    "<p>Họ và tên chủ hộ: " +
    name +
    ". </p>" +
    "<p>Tổng tiền điện: " +
    tongTien.toLocaleString() +
    "VND</p>";
};

function tinhTongTien(chiSoDien, giaMuc1, giaMuc2, giaMuc3, giaMuc4, giaMuc5) {
  if (0 < chiSoDien && chiSoDien <= 50) {
    tienDien1 = chiSoDien * giaMuc1;
    tongTien = tienDien1;
  } else if (chiSoDien > 50 && chiSoDien <= 100) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = (chiSoDien - 50) * giaMuc2;
    tongTien = tienDien1 + tienDien2;
  } else if (chiSoDien > 100 && chiSoDien <= 200) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = 50 * giaMuc2;
    tienDien3 = (chiSoDien - 100) * giaMuc3;
    tongTien = tienDien1 + tienDien2 + tienDien3;
  } else if (chiSoDien > 200 && chiSoDien <= 350) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = 50 * giaMuc2;
    tienDien3 = 100 * giaMuc3;
    tienDien4 = (chiSoDien - 200) * giaMuc4;
    tongTien = tienDien1 + tienDien2 + tienDien3 + tienDien4;
  } else if (chiSoDien > 350) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = 50 * giaMuc2;
    tienDien3 = 100 * giaMuc3;
    tienDien4 = 150 * giaMuc4;
    tienDien5 = (chiSoDien - 350) * giaMuc5;
    tongTien = tienDien1 + tienDien2 + tienDien3 + tienDien4 + tienDien5;
  } else {
    alert("Vui lòng nhập chỉ số điện!");
  }
  return tongTien;
}

// Bài tập 3:
const thueSuat1 = 5 / 100;
const thueSuat2 = 10 / 100;
const thueSuat3 = 15 / 100;
const thueSuat4 = 20 / 100;
const thueSuat5 = 25 / 100;
const thueSuat6 = 30 / 100;
const thueSuat7 = 35 / 100;

var thueMuc1 = 0;
var thueMuc2 = 0;
var thueMuc3 = 0;
var thueMuc4 = 0;
var thueMuc5 = 0;
var thueMuc6 = 0;
var thueMuc7 = 0;
var tongThue = 0;
var thuNhapChiuThue = 0;

document.getElementById("tinhThue").onclick = function () {
  var name = document.getElementById("name").value;
  var thuNhap = document.getElementById("income").value * 1;
  var soNguoi = document.getElementById("people").value * 1;
  if (soNguoi > 0) {
    thuNhapChiuThue = thuNhap - 4e6 - soNguoi * 1.6e6;
  } else {
    thuNhapChiuThue = thuNhap;
  }
  tinhThueTNCN(
    thuNhapChiuThue,
    thueSuat1,
    thueSuat2,
    thueSuat3,
    thueSuat4,
    thueSuat5,
    thueSuat6,
    thueSuat7
  );
  document.getElementById("baoCaoThue").innerHTML =
    "<p>Họ và tên: " +
    name +
    "</p>" +
    "<p>Thuế TNCN phải đóng: " +
    tongThue.toLocaleString() +
    "VND</p>";
};

function tinhThueTNCN(
  thuNhapChiuThue,
  thueSuat1,
  thueSuat2,
  thueSuat3,
  thueSuat4,
  thueSuat5,
  thueSuat6,
  thueSuat7
) {
  if (0 < thuNhapChiuThue && thuNhapChiuThue <= 6e7) {
    thueMuc1 = thuNhapChiuThue * thueSuat1;
    tongThue = thueMuc1;
  } else if (thuNhapChiuThue > 6e7 && thuNhapChiuThue <= 12e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = (thuNhapChiuThue - 6e7) * thueSuat2;
    tongThue = thueMuc1 + thueMuc2;
  } else if (thuNhapChiuThue > 12e7 && thuNhapChiuThue <= 21e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = (thuNhapChiuThue - 12e7) * thueSuat3;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3;
  } else if (thuNhapChiuThue > 21e7 && thuNhapChiuThue <= 38.4e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = (thuNhapChiuThue - 21e7) * thueSuat4;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3 + thueMuc4;
  } else if (thuNhapChiuThue > 38.4e7 && thuNhapChiuThue <= 62.4e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = 17.4e7 * thueSuat4;
    thueMuc5 = (thuNhapChiuThue - 38.4e7) * thueSuat5;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3 + thueMuc4 + thueMuc5;
  } else if (thuNhapChiuThue > 38.4e7 && thuNhapChiuThue <= 62.4e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = 17.4e7 * thueSuat4;
    thueMuc5 = 24e7 * thueSuat5;
    thueMuc6 = (thuNhapChiuThue - 62.4e7) * thueSuat6;
    tongThue = thueMuc1 + thueMuc2 + thueMuc3 + thueMuc4 + thueMuc5 + thueMuc6;
  } else if (thuNhapChiuThue > 62.4e7 && thuNhapChiuThue <= 96e7) {
    thueMuc1 = 6e7 * thueSuat1;
    thueMuc2 = 6e7 * thueSuat2;
    thueMuc3 = 9e7 * thueSuat3;
    thueMuc4 = 17.4e7 * thueSuat4;
    thueMuc5 = 24e7 * thueSuat5;
    thueMuc6 = 33.6e7 * thueSuat6;
    thueMuc7 = (thuNhapChiuThue - 96e7) * thueSuat7;
    tongThue =
      thueMuc1 +
      thueMuc2 +
      thueMuc3 +
      thueMuc4 +
      thueMuc5 +
      thueMuc6 +
      thueMuc7;
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
  return tongThue;
}

// Bài tập 4:
const billND = 4.5;
const serviceND = 20.5;
const channelND = 7.5;

const billDN = 15;
const serviceDNBasic = 70;
const serviceDNExtra = 5;
const channelDN = 50;

var tienDVCoBanDN = 0;
var tienDVCaoCap = 0;
var tongTienCap = 0;

function loaiKH() {
  var loaiKhachHang = document.getElementById("typeCustomer").value;
  if (loaiKhachHang === "Doanh Nghiệp") {
    document.getElementById("numConnection").style.display = "inline";
  } else if (loaiKhachHang === "Nhà Dân") {
    document.getElementById("numConnection").style.display = "none";
  }
  return loaiKhachHang;
}

function tienDVDN(soKetNoi) {
  if (0 < soKetNoi && soKetNoi <= 10) {
    tienDVCoBanDN = 75;
  } else if (soKetNoi > 10) {
    tienDVCoBanDN = 75 + (soKetNoi - 10) * 5;
  }
  return tienDVCoBanDN;
}

document.getElementById("tinhTien2").onclick = function () {
  var maKH = document.getElementById("customerCode").value;
  var soKenhCC = document.getElementById("numChannel").value * 1;
  var soKetNoi = document.getElementById("numConnection").value * 1;
  var khachHang = loaiKH();
  tienDVCoBanDN = tienDVDN(soKetNoi);

  if (khachHang === "Nhà Dân") {
    tongTienCap = billND + serviceND + channelND * soKenhCC;
  } else if (khachHang === "Doanh Nghiệp") {
    tongTienCap = billDN + tienDVCoBanDN + channelDN * soKenhCC;
  }

  document.getElementById("thongBao2").innerHTML =
    "<p>Mã Khách Hàng: " +
    maKH +
    "</p>" +
    "<p>Tổng tiền cáp: $" +
    tongTienCap +
    "</p>";
};
