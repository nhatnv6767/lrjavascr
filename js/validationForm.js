var checkValidation = function () {
  var hoTen = document.getElementById("firstName").value;
  kiemTraRong(hoTen, "error_firstName", "Họ")
  
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
