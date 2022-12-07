var checkValidation = function () {
  var firstName = document.getElementById("firstName").value;
  if (firstName === "") {
    document.getElementById("error_firstName").innerHTML = "Họ không được bỏ trống"
  }

  var lastName = document.getElementById("lastName").value;
  if (lastName === "") {
    document.getElementById("error_lastName").innerHTML = "Tên không được bỏ trống"
  }
}

document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation
