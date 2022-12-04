function getEle(id) {
  return document.getElementById(id)
}

function batDen() {
  var den = getEle("theDen");
  den.src = "./img/pic_bulbon.gif"
}

function tatDen() {
  var den = getEle("theDen");
  den.src = "./img/pic_bulboff.gif"
}


function thucHienDisable() {
  var userName = getEle("username");
  userName.disabled = true;
}
