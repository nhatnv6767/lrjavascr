var sinhVien = { // scope
    maSV: 1,
    tenSV: "Nguyen Thanh Than",
    loaiSinhVien: "Kho Khan",
    diemToan: 1,
    diemLy: 5,
    diemHoa: 7,
    tinhDiemTrungBinh: function () {
        var dtb = (Number(sinhVien.diemToan) + Number(sinhVien.diemLy) + Number(sinhVien.diemHoa)) / 3
        return dtb
    }
}

console.log(sinhVien.maSV)
console.log(sinhVien["tenSV"])
