function noSpace(x) {
  const arrStr = [...x];
  let newStr = "";

  for (let i = 0; i < arrStr.length; i++) {
    const el = arrStr[i];

    if (el !== " ") {
      newStr += el;
    }
  }

  return newStr;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
