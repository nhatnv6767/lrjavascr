const ARRAY_GIA_UBER_X = [8000, 12000, 10000];
const GIA_CHO_UBER_X = 2000;

const ARRAY_GIA_SUV = [9000, 14000, 12000];
const GIA_CHO_SUV = 3000;

const ARRAY_GIA_BLACK = [10000, 16000, 14000];
const GIA_CHO_BLACK = 4000;


function kiemTraLoaiXe() {
  var uberX = document.getElementById("uberX");
  var uberSUV = document.getElementById("uberSUV");
  var uberBlack = document.getElementById("uberBlack");

  if (uberX.checked) {
    return "uberX";
  } else if (uberSUV.checked) {
    return "uberSUV"
  } else if (uberBlack.checked) {
    return "uberBlack"
  }
}

function tinhTienCho(thoiGianCho, giaCho) {
  var tienCho = 0;
  if (thoiGianCho >= 3) {
    tienCho = Math.round(thoiGianCho / 3.0) * giaCho;
  }
  return tienCho;
}


function tinhTien(soKm, thoiGianCho, arrayPrice, giaCho) {
  var tienCho = tinhTienCho(thoiGianCho, giaCho);
  if (soKm <= 1) {
    return arrayPrice[0] + tienCho
  } else if (soKm > 1 && soKm <= 20) {
    return arrayPrice[0] + (soKm - 1) * arrayPrice[1] + tienCho;
  } else if (soKm > 20) {
    return arrayPrice[0] + 19 * arrayPrice[1] * (soKm - 20) * arrayPrice[2] + tienCho;
  }
}
