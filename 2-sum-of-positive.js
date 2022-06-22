function positiveSum(arr) {
  return arr
    .filter((item) => item > 0)
    .reduce((prevVal, currVal) => prevVal + currVal, 0);
}

const result = positiveSum([1, 2, -3, 4, 5]);

console.info(result);
