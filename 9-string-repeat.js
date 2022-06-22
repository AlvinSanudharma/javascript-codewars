function repeatStr(n, s) {
  let newStr = "";

  for (let i = 0; i < n; i++) {
    newStr += s;
  }

  return newStr;
}

console.log(repeatStr(2, "ha "));
