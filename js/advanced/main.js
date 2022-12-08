var danhSachSinhVien = new DanhSachSinhVien();
var validate = new Validation();

function ThemSinhVien() {
    // lay du lieu tu nguoi dung
    var masv = document.getElementById("masv").value;
    var hoten = document.getElementById("hoten").value;
    var cmnd = document.getElementById("cmnd").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;

    // kiem tra validation
    validate.KiemTraRong(masv)
}
