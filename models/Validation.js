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
}
