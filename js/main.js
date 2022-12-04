function getEle(id) {
  return document.getElementById(id);
}

function calculateTip() {
  var tongBill = getEle("billamt").value;
  console.log(tongBill)
}


getEle("calculate").onclick = function () {
  calculateTip()
}
