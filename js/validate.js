var pattern = /cyberlearn/ig;

document.querySelector("#btnVerify").onclick = function () {
  // lay thong tin nguoi dung nhap vao tu input
  var txtInput = document.querySelector("#text");
  var text = txtInput.value;

  // kiem tra thong tin hop le voi pattern hay khong
  if (pattern.test(text)) {
    txtInput.style.borderBottom = "3px solid green"
  } else {
    txtInput.style.borderBottom = "3px solid red"
  }
}
