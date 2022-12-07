var checkValidation = function () {

  var valid = true;
  valid = kiemTraRong("firstName", "error_firstName") &
    kiemTraRong("lastName", "error_lastName") &
    kiemTraRong("password", "error_password") &
    kiemTraRong("confirmPassword", "error_confirmPassword") &
    kiemTraRong("phone", "error_phone") &
    kiemTraRong("email", "error_email")

  if (!valid) {
    return false
  }

  return true
}

var kiemTraRong = function (selectorValue, selectorError) {
  var inputText = document.getElementById(selectorValue);
  if (inputText.value.trim() === "") {
    document.getElementById(selectorError).innerHTML = inputText.name + " không được bỏ trống!"
    return false
  } else {
    document.getElementById(selectorError).innerHTML = ""
    return true
  }
}

var kiemTraTatCaLaChu = function () {
  var regexChu = /^[A-Za-z ]+$/;
}


document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation
