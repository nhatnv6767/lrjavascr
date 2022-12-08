var danhSachSinhVien = new DanhSachSinhVien();
var validate = new Validation();

function DomID(id) {
    var element = document.getElementById(id);
    return element;
}

function ThemSinhVien() {
    // lay du lieu tu nguoi dung
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var email = DomID("email").value;
    var sdt = DomID("sdt").value;

    // kiem tra validation
    validate.KiemTraRong(masv)
}
