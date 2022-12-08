var Validation = function () {
    this.kiemTraRong = function (value) {
        if (value.trim() === "") {
            return false
        }
        return true;
    }
}
