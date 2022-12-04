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

function thayDoiStyle(id) {
  var the = getEle(id);
  the.style.fontSize = "30px"
  the.style.color = "red"
}

function changeDiv(id) {
  var the = getEle(id);
  the.style.backgroundColor = "green"
  the.style.width = "100px";
}

function nhanNut1() {
  thayDoiStyle("theP")
  changeDiv("theDiv")
}
