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
    if (validate.KiemTraEmail(email)) {
        document.getElementById("email").style.borderColor = "green"
    } else {
        document.getElementById("email").style.borderColor = "red"
        loi++
    }
    if (validate.KiemTraSoDT(sdt)) {
        document.getElementById("sdt").style.borderColor = "green"
    } else {
        document.getElementById("sdt").style.borderColor = "red"
        loi++
    }

    if (loi != 0) {
        return;
    }

    // them sinh vien
    var sinhvien = new SinhVien(masv, hoten, email, sdt, cmnd)
    danhSachSinhVien.ThemSinhVien(sinhvien)
    console.log(danhSachSinhVien)
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

function KiemTraTatCaLaChu() {
    if (validate.kiemTraTatCaLaChu()) {

    }
}


function CapNhatDanhSachSV(DanhSachSinhVien) {
    var lstTableSV = DomID("tbodySinhVien");
    lstTableSV.innerHTML = "";
    for (var i = 0; i < DanhSachSinhVien.DSSV.length; i++) {
        // lay thong tin sinh vien tu trong mang sinh vien
        var sv = danhSachSinhVien.DSSV[i];
        // tao the tr
        var trSinhVien = document.createElement("tr")
        // tao cac the td va filter du lieu sinh vien thu [i] vao
        var tdCheckBox = document.createElement("td")
        var tdMaSV = TaoTheTD("MaSV", sv.MaSV);
        var tdHoTen = TaoTheTD("HoTen", sv.HoTen);
        var tdCMND = TaoTheTD("CMND", sv.CMND);
        var tdEmail = TaoTheTD("Email", sv.Email);
        var tdSoDT = TaoTheTD("SoDT", sv.SoDT);

        // append cac td vao tr
        trSinhVien.appendChild(tdCheckBox)
        trSinhVien.appendChild(tdMaSV)
        trSinhVien.appendChild(tdHoTen)
        trSinhVien.appendChild(tdCMND)
        trSinhVien.appendChild(tdEmail)
        trSinhVien.appendChild(tdSoDT)

        // append cac tr vao tbodySinhVien
        lstTableSV.appendChild(trSinhVien)

    }
}

function TaoTheTD(className, value) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td
}
