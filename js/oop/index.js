var xuLyXacNhan = function () {
  var maSinhVien = document.querySelector("#maSinhVien").value;
  var tenSinhVien = document.querySelector("#tenSinhVien").value;
  var loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  var diemToan = document.querySelector("#diemToan").value;
  var diemLy = document.querySelector("#diemLy").value;
  var diemHoa = document.querySelector("#diemHoa").value;
  var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa)
}

var tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
  var dtb = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
  return dtb;
}

document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;
