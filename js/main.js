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


function dangNhap() {
  var userName = getEle("username");
  var pass = getEle("password");
  var sectionThongBao = getEle("sectionThongBao")
  var thePThongBao = getEle("thePThongBao")
  if (userName.value == 'username' && pass.value == 'password') {
    sectionThongBao.style.backgroundColor = "green"
    thePThongBao.innerHTML = "Login Successfully"
  }
}
