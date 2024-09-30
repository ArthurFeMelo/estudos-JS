function* nextText() {
  yield "Oi, eu sou o Arthur";
}

function onClickElement() {
  let newText = document.getElementById("content");
  let itc = nextText();
  itc.next().value;
  nextText.innerHTML = itc.next().value;
}

console.log(onClickElement);
