function teste(...valores) {
  let num;
  num = valores.length;
  if (num === 10) {
    return (num += valores.length);
  } else {
    return console.log("gay");
  }
}

console.log(teste(4, 10, 10, 10, 10, 10, 10, 10, 10, 10));
