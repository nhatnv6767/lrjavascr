function myFunction() {
  var list = document.getElementsByTagName("ul")
  var ulDauTien = list[0];
  var listLi = list[0].getElementsByTagName("li");
  var liDauTien = listLi[0];
  liDauTien.innerHTML = "CHANGED"
}
