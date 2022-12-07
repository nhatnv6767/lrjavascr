var checkValidation = function () {
  var firstName = document.getElementById("firstName").value;
  if (firstName === "") {
    document.getElementById("error_firstName").innerHTML = "Họ tên không được bỏ trống"
  }
}


document.getElementById("btnDangKy").onclick = checkValidation()
