function myFunction() {
  var list = document.querySelectorAll("li");
  for (var item of list) {
    item.style.color = "green";
    item.style.fontSize = "55px";
  }
}
