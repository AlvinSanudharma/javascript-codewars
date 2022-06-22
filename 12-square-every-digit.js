function squareDigits(num) {
  let newNum = String(num);
  let result = "";

  for (let i = 0; i < newNum.length; i++) {
    const el = newNum[i];

    result += el * el;
  }

  return parseInt(result);
}

console.log(squareDigits(3212));
