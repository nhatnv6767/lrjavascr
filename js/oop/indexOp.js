var sinhVien = new SinhVien();
var xuLyXacNhan = function () {
    sinhVien.maSV = document.querySelector("#maSinhVien").value;
    sinhVien.tenSV = document.querySelector("#tenSinhVien").value;
    sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    sinhVien.diemToan = document.querySelector("#diemToan").value;
    sinhVien.diemLy = document.querySelector("#diemLy").value;
    sinhVien.diemHoa = document.querySelector("#diemHoa").value;
    sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    // DOM den giao dien hien thi du lieu

    document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.tenSV;
    document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.maSV;
    document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
    document.querySelector("#txtDiemTrungBinh").innerHTML = sinhVien.tinhDiemTrungBinh();
    document.querySelector("#txtXepLoai").innerHTML = sinhVien.xepLoai();
}
document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;
