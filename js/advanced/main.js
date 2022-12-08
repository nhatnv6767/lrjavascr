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

    var loi = 0
    // kiem tra validation
    if (KiemTraDauVaoRong("masv", masv)) {
        loi++
    }
    if (KiemTraDauVaoRong("hoten", hoten)) {
        loi++
    }
    if (KiemTraDauVaoRong("cmnd", cmnd)) {
        loi++
    }
    if (KiemTraDauVaoRong("email", email)) {
        loi++
    }
    if (KiemTraDauVaoRong("sdt", sdt)) {
        loi++
    }
    if (loi != 0) {
        return;
    }
}

function KiemTraDauVaoRong(ID, value) {
    if (validate.KiemTraRong(value)) {
        DomID(ID).style.borderColor = "red"
        return true
    } else {
        DomID(ID).style.borderColor = "green"
        return false
    }
}
