function rest(...valores) {
  let tam = valores.length;
  let res = 0;
  for (let i = 0; i < tam; i++) {
    res = valores[i];
    console.log(res);
  }

  return res;
}

console.log(rest(10, 15, 16));
