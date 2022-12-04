function getEle(id) {
  return document.getElementById(id)
}


function thayDoiNoiDung(id, noiDung) {
  var theP = getEle(id)
  theP.innerHTML = noiDung
}
