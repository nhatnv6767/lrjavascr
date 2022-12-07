var pattern = /cyberlearn/ig;

document.querySelector("#btnVerify").onclick = function () {
  // lay thong tin nguoi dung nhap vao tu input
  var txtInput = document.querySelector("#text");
  var spanTB = document.querySelector("#tb")
  var text = txtInput.value;

  // kiem tra thong tin hop le voi pattern hay khong
  if (pattern.test(text)) {
    spanTB.innerHTML = "Dữ liệu hợp lệ"
    spanTB.className = "alert alert-success"
  } else {
    spanTB.innerHTML = "Dữ liệu không hợp lệ!!!"
    spanTB.className = "alert alert-danger"
  }
}


document.getElementById("btnCheckPattern").onclick = function () {
  var regex = /(x|y)/;
  if (regex.test("xyza")) {
    console.log("Hợp lệ")
  } else {
    console.log("Không hợp lệ")
  }
}
