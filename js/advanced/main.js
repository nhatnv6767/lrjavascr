var danhSachSinhVien = new DanhSachSinhVien();
var validate = new Validation();

GetStorage()

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
    CapNhatDanhSachSV(danhSachSinhVien)
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
        trSinhVien.id = sv.MaSV;
        trSinhVien.className = "trSinhVien"
        trSinhVien.setAttribute("onclick", "ChinhSuaSinhVien('" + sv.MaSV + "')")
        // tao cac the td va filter du lieu sinh vien thu [i] vao
        var tdCheckBox = document.createElement("td")
        var ckbMaSinhVien = document.createElement("input")
        console.log(ckbMaSinhVien)
        ckbMaSinhVien.setAttribute("class", "ckbMaSV")
        ckbMaSinhVien.setAttribute("type", "checkbox")
        ckbMaSinhVien.setAttribute("value", sv.MaSV)
        tdCheckBox.appendChild(ckbMaSinhVien)

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

// luu storage
function SetStorage() {
    // chuyen doi object mang danh sach sinh vien thanh chuoi json
    var jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV)
    // roi dem chuoi json luu vao storage va dat ten la DanhSachSV
    localStorage.setItem("DanhSachSV", jsonDanhSachSinhVien);
}

function GetStorage() {
    // lay ra chuoi json la mang danhsachsinhvien thong qua ten DanhSachSV
    var jsonDanhSachSinhVien = localStorage.getItem("DanhSachSV");
    var mangDSSV = JSON.parse(jsonDanhSachSinhVien);
    danhSachSinhVien.DSSV = mangDSSV;
    CapNhatDanhSachSV(danhSachSinhVien)
}

function XoaSinhVien() {
    // mang checkbox
    var lstMaSV = document.getElementsByClassName("ckbMaSV");
    // mang ma sinh vien duoc chon
    var lstMaSVDuocChon = []
    for (var i = 0; i < lstMaSV.length; i++) {
        // console.log(lstMaSV[i])
        // kiem phan tu checkbox da duoc chon hay chua
        if (lstMaSV[i].checked) {
            lstMaSVDuocChon.push(lstMaSV[i].value)
        }
    }
    danhSachSinhVien.XoaSinhVien(lstMaSVDuocChon)
    CapNhatDanhSachSV(danhSachSinhVien)
    SetStorage()
}

function TimKiemSinhVien() {
    var tukhoa = DomID("tukhoa").value;
    var lstDanhSachSinhVienTimKiem = danhSachSinhVien.TimKiemSinhVien(tukhoa)
    CapNhatDanhSachSV(lstDanhSachSinhVienTimKiem)
}

function ChinhSuaSinhVien(masv) {
    var sinhvien = danhSachSinhVien.TimSVTheoMa(masv)
    if (sinhvien != null) {
        DomID("masv").value = sinhvien.MaSV
        DomID("hoten").value = sinhvien.HoTen
        DomID("cmnd").value = sinhvien.CMND
        DomID("email").value = sinhvien.Email
        DomID("sdt").value = sinhvien.SoDT
    }
}

function LuuThongTin() {
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
    danhSachSinhVien.SuaSinhVien(sinhvien)
    CapNhatDanhSachSV(danhSachSinhVien)
}
