var checkValidation = function () {

  var valid = true;
  valid = kiemTraRong("firstName", "error_firstName") &
    kiemTraRong("lastName", "error_lastName") &
    kiemTraRong("password", "error_password") &
    kiemTraRong("confirmPassword", "error_confirmPassword") &
    kiemTraRong("email", "error_email")

  // kiem tra chu // nghia la ket hop them dieu kien &
  valid &= kiemTraTatCaLaChu("#firstName", "#error_firstName_all_leter") &
    kiemTraTatCaLaChu("#lastName", "#error_lastName_all_leter")

  valid &= kiemTraTatCaLaSo("#phone", "#error_phone")
  if (!valid) {
    return false
  }

  return true
}

var kiemTraRong = function (idValue, idError) {
  var inputText = document.getElementById(idValue);
  if (inputText.value.trim() === "") {
    document.getElementById(idError).innerHTML = inputText.name + " không được bỏ trống!"
    document.getElementById(idError).style.display = "block"
    return false
  } else {
    document.getElementById(idError).innerHTML = ""
    document.getElementById(idError).style.display = "none"
    return true
  }
}

var kiemTraTatCaLaChu = function (selectorValue, selectorError) {
  var inputText = document.querySelector(selectorValue);
  var regexChu = /^[A-Za-z ]+$/;

  if (regexChu.test(inputText.value)) {
    document.querySelector(selectorError).innerHTML = ""
    document.querySelector(selectorError).style.display = "none"
    return true
  } else {
    document.querySelector(selectorError).innerHTML = inputText.name + " phải là chữ!"
    document.querySelector(selectorError).style.display = "block"
    return false
  }
}

var kiemTraTatCaLaSo = function (selectorValue, selectorError) {
  var inputText = document.querySelector(selectorValue);
  var regexNumber = /^[0-9]+$/;
  if (regexNumber.test(inputText.value)) {
    document.querySelector(selectorError).innerHTML = '';
    document.querySelector(selectorError).style.display = 'none';
    return true;
  } else {
    document.querySelector(selectorError).innerHTML = inputText.name + ' yêu cầu nhập số !';
    document.querySelector(selectorError).style.display = 'block';
    return false;
  }
}

document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation
