var Validation = function () {
    this.kiemTraRong = function (value, name, selectorError) {
        if (value.trim() === "") {
            document.querySelector(selectorError).innerHTML = name + " không được bỏ trống"
            document.querySelector(selectorError).style.display = "block";
            return false
        }
        document.querySelector(selectorError).innerHTML = ""
        document.querySelector(selectorError).style.display = "none";
        return true;
    }
    // kiem tra tat ca la so
    this.kiemTraTatCaLaSo = function (value, name, selectorError) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = ""
            document.querySelector(selectorError).style.display = "none";
            return true
        }
        document.querySelector(selectorError).innerHTML = name + " tất cả phải là số"
        document.querySelector(selectorError).style.display = "block";
    }
    // kiem tra do dai chuoi

    this.kiemTraDoDaiChuoi = function (value, name, selectorError, minLength, maxLength) {
        if (value.trim().length < minLength || value.trim().length > maxLength) {
            document.querySelector(selectorError).innerHTML = name + ' từ ' + minLength + ' đến ' + maxLength + ' ký tự';
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
}
