function ret() {
  let num1 = Number(document.getElementById("num1").value);

  let changer = document.getElementById("number");
  let num2 = 2;
  let res = num1 / num2;
  changer.innerHTML = res;
  console.log(res);
}
