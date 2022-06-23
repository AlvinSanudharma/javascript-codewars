function squareSum(numbers) {
  let finalResult = 0;

  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];

    finalResult += el * el;
  }

  return finalResult;
}

console.log(squareSum([0, 3, 4, 5]));
