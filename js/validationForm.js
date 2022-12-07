var checkValidation = function () {

  if (kiemTraRong("firstName", "error_firstName")) {
    return true
  } else {
    return false
  }

}

var kiemTraRong = function (selectorValue, selectorError) {
  var inputText = document.getElementById(selectorValue).value;
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
