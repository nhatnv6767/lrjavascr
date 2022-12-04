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
  }
}


getEle("calculate").onclick = function () {
  calculateTip()
}
