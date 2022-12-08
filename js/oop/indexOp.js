var sinhVien = new SinhVien();
var validation = new Validation();
var xuLyXacNhan = function () {
    sinhVien.maSV = document.querySelector("#maSinhVien").value;
    sinhVien.tenSV = document.querySelector("#tenSinhVien").value;
    sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    sinhVien.diemToan = document.querySelector("#diemToan").value;
    sinhVien.diemLy = document.querySelector("#diemLy").value;
    sinhVien.diemHoa = document.querySelector("#diemHoa").value;
    sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    // DOM den giao dien hien thi du lieu

    // Kiem tra validation
    var valid = true;
    valid &= validation.kiemTraRong(sinhVien.maSV) &
        validation.kiemTraRong(sinhVien.tenSV) &
        validation.kiemTraRong(sinhVien.loaiSinhVien) &
        validation.kiemTraRong(sinhVien.diemToan) &
        validation.kiemTraRong(sinhVien.diemLy) &
        validation.kiemTraRong(sinhVien.diemHoa) &
        validation.kiemTraRong(sinhVien.diemRenLuyen)
    if (!valid) {
        alert("Dữ liệu không hợp lệ")
        return;
    }

    document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.tenSV;
    document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.maSV;
    document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
    document.querySelector("#txtDiemTrungBinh").innerHTML = sinhVien.tinhDiemTrungBinh();
    document.querySelector("#txtXepLoai").innerHTML = sinhVien.xepLoai();
}
document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;
