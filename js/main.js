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
