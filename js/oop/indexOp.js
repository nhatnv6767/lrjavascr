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

var sinhVien2 = new SinhVien()
console.log(sinhVien2)
