var checkValidation = function () {

  var valid = true;
  valid = kiemTraRong("firstName", "error_firstName");
  valid = kiemTraRong("lastName", "error_lastName");
  return valid
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


document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;

document.getElementById("btnDangKy").onclick = checkValidation
