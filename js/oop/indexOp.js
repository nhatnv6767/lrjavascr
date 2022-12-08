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
    valid &= validation.kiemTraRong(sinhVien.maSV, "Mã sinh viên", "#error_maSinhVien_required") &
        validation.kiemTraRong(sinhVien.tenSV, "Tên sinh viên", "#error_tenSinhVien_required") &
        validation.kiemTraRong(sinhVien.diemToan, "Điểm toán", "#error_diemToan_required") &
        validation.kiemTraRong(sinhVien.diemLy, "Điểm lý", "#error_diemLy_required") &
        validation.kiemTraRong(sinhVien.diemHoa, "Điểm hoá", "#error_diemHoa_required") &
        validation.kiemTraRong(sinhVien.diemRenLuyen, "Điểm rèn luyện", "#error_diemRenLuyen_required")

    // kiem tra tat ca la so
    valid &= validation.kiemTraDoDaiChuoi(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_all_number')
        & validation.kiemTraDoDaiChuoi(sinhVien.diemToan, 'Điểm toán', '#error_diemToan_all_number')
        & validation.kiemTraDoDaiChuoi(sinhVien.diemLy, 'Điểm lý', '#error_diemLy_all_number')
        & validation.kiemTraDoDaiChuoi(sinhVien.diemHoa, 'Điểm hoá', '#error_diemHoa_all_number')
        & validation.kiemTraDoDaiChuoi(sinhVien.diemRenLuyen, 'Điểm rèn luyện', '#error_diemRenLuyen_all_number');

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
