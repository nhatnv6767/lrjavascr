function getEle(id) {
  return document.getElementById(id)
}


function thayDoiNoiDung(id, noiDung) {
  var theP = getEle(id)
  theP.innerHTML = noiDung
}


function anThe(id) {
  var the = getEle(id)
  the.style.display = 'none'
}

function nhanNut1() {
  anThe("theP")
}
