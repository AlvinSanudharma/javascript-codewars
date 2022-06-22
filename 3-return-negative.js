function makeNegative(num) {
  return num <= 0 ? num : -num;
}

const result = makeNegative(-0.12);

console.info(result);
