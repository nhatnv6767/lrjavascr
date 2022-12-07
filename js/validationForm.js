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

var kiemTraRong = function (idValue, idError) {
  var inputText = document.getElementById(idValue);
  if (inputText.value.trim() === "") {
    document.getElementById(idError).innerHTML = inputText.name + " không được bỏ trống!"
    return false
  } else {
    document.getElementById(idError).innerHTML = ""
    return true
  }
}

var kiemTraTatCaLaChu = function (selectorValue, selectorError) {
  var inputText = document.querySelector(selectorValue);
  var regexChu = /^[A-Za-z ]+$/;

  if (regexChu.test(inputText.value)) {
    document.querySelector(selectorValue).innerHTML = ""
    return true
  } else {
    document.querySelector(selectorValue).innerHTML = inputText.name + " phải là chữ!"
    return false
  }
}


document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation
