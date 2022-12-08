var sinhVien = { // scope instance
    maSV: 1,
    tenSV: "Nguyen Thanh Than",
    loaiSinhVien: "Kho Khan",
    diemToan: 1,
    diemLy: 5,
    diemHoa: 7,
    tinhDiemTrungBinh: function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3
        return dtb.toFixed(2)
    }
}

console.log(sinhVien.maSV)
console.log(sinhVien["tenSV"])
console.log(sinhVien.tinhDiemTrungBinh())
