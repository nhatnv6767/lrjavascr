function getEle(id) {
  return document.getElementById(id)
}

function thayDoiNoiDung() {
  var theP = getEle("theP")
  theP.innerHTML = "Changed"
}
