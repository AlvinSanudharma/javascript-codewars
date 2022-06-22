function solution(str) {
  let newStr = "";

  for (let i = str.length; i >= 0; i--) {
    const el = str[i];

    if (el) {
      newStr += el;
    }
  }

  return newStr;
}

console.log(solution("world"));
