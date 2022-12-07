var checkValidation = function () {
  var firstName = document.getElementById("firstName").value;
  if (firstName.trim() === "") {
    document.getElementById("error_firstName").innerHTML = "Họ không được bỏ trống"
  } else {
    document.getElementById("error_firstName").innerHTML = ""
  }

  var lastName = document.getElementById("lastName").value;
  if (lastName.trim() === "") {
    document.getElementById("error_lastName").innerHTML = "Tên không được bỏ trống"
  } else {
    document.getElementById("error_lastName").innerHTML = ""
  }
}

var kiemTraRong = function (value, selectorError, name) {
  if (value.trim() === "") {
    document.getElementById(selectorError).innerHTML = name + " không được bỏ trống!"
    return false
  } else {
    document.getElementById(selectorError).innerHTML = ""
    return true
  }
}


document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation
