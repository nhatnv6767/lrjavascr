var pattern = /cyberlearn/ig;

document.querySelector("#btnVerify").onclick = function () {
  // lay thong tin nguoi dung nhap vao tu input
  var text = document.querySelector("#text").value;

  // kiem tra thong tin hop le voi pattern hay khong
  console.log(pattern.test(text))
}
