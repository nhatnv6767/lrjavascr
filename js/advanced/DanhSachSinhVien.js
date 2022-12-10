function DanhSachSinhVien() {
    this.DSSV = [];
    this.ThemSinhVien = function (svThem) {
        this.DSSV.push(svThem)
    }
    this.XoaSinhVien = function (listSVXoa) {
        for (var i = 0; i < listSVXoa.length; i++) {
            for (var j = 0; j < this.DSSV.length; j++) {
                var sinhvien = this.DSSV[j]
                if (listSVXoa[i] === sinhvien.MaSV) {
                    this.DSSV.splice(j, 1);
                }
            }
        }
    }
    this.SuaSinhVien = function (svCapNhat) {
    }
    this.TimKiemSinhVien = function (keyWord) {
        // list ket qua tim kiem: DanhSachSinhVien
        var lstKetQuaTimKiem = new DanhSachSinhVien();
        for (var i = 0; i < this.DSSV.length; i++) {
            var sinhvien = this.DSSV[i];
            if (sinhvien.HoTen.toLowerCase().trim().search(keyWord.toLowerCase().trim()) !== -1) {
                lstKetQuaTimKiem.ThemSinhVien(sinhvien)
            }
        }
        return lstKetQuaTimKiem
    }
}
