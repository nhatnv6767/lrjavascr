function getEle(id) {
  return document.getElementById(id)
}

function changeInnerHTML(id, text) {
  var theP = getEle(id);
  theP.innerHTML = text;
}
