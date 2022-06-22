var summation = function (num) {
  let total = 0;

  for (let i = 0; i <= num; i++) {
    const el = i;

    if (el > 0) {
      total += i;
    }
  }

  return total;
};

console.log(summation(8));
