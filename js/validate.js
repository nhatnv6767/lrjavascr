var pattern = /cyberlearn/ig;

document.querySelector("#btnVerify").onclick = function () {
  // lay thong tin nguoi dung nhap vao tu input
  var txtInput = document.querySelector("#text");
  var spanTB = document.querySelector("#tb")
  var text = txtInput.value;

  // kiem tra thong tin hop le voi pattern hay khong
  if (pattern.test(text)) {
    txtInput.style.borderBottom = "3px solid green"
    spanTB.innerHTML = "Dữ liệu hợp lệ"
    spanTB.className = "alert alert-success"
  } else {
    txtInput.style.borderBottom = "3px solid red"
    spanTB.innerHTML = "Dữ liệu không hợp lệ!!!"
    spanTB.className = "alert alert-danger"
  }
}
