function randomRange(myMin, myMax) {
  //math.random = decimal. floor remove decimal usando multiplicação.
  //ex: números entre 7 e 11 [7, 8, 9, 10, 11] são 5 números. (11 - 7) = 4, por isso soma +1. Então fica 5.
  //Mas como eu quero entre 7 e 11 e não 0 e 5, eu somo o mínimo depois do floor para entrar na range.
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(7, 11));