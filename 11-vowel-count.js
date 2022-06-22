function getCount(str) {
  let newStr = [...str];
  let countStr = "";

  for (let i = 0; i < newStr.length; i++) {
    const el = newStr[i];

    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      countStr += el;
    }
  }

  return countStr.length;
}

console.log(getCount("abracadabra"));
