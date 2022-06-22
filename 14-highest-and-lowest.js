function highAndLow(numbers) {
  const arrayNumbers = numbers.split(" ");
  let highestNumber = Number(arrayNumbers[0]);
  let lowestNumber = Math.max(...arrayNumbers.map((el) => Number(el)));

  for (let i = 0; i < arrayNumbers.length; i++) {
    const el = arrayNumbers[i];
    const elNum = Number(el);

    if (elNum > highestNumber) highestNumber = elNum;

    if (elNum < lowestNumber) lowestNumber = elNum;
  }

  return `${highestNumber} ${lowestNumber}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
