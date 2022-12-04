function getEle(id) {
  return document.getElementById(id);
}

function calculateTip() {
  var tongBill = getEle("billamt").value;
  var haiLongVaTip = getEle("serviceQual").value;
  var soNguoiShare = getEle("peopleamt").value;

  // validate
  if (tongBill === "" || haiLongVaTip == 0) {
    alert("Select value")
    return;
  }

  // kiem tra co nhap vao so nguoi share tip hay khong
  if (soNguoiShare === "" || soNguoiShare <= 1) {
    soNguoiShare = 1;
    getEle("each").style.display = "none";
  } else {
    getEle("each").style.display = "block";
  }

  // tinh toan
  var tongTip = (tongBill * haiLongVaTip) / soNguoiShare;
  // lam tron den phan thap phan co 2 chu so
  tongTip = Math.round(tongTip * 100) / 100;
  // dam bao luc nao cung co 2 chu so o phan thap phan
  tongTip = tongTip.toFixed(2);

  // hien thi vung tien tip
  getEle("totalTip").style.display = "block";
  getEle("tip").innerHTML = tongTip;
}

// hien thi vung tien tip
getEle("totalTip").style.display = "none";
getEle("each").style.display = "none";


getEle("calculate").onclick = function () {
  calculateTip()
}
