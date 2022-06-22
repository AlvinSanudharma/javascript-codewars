function disemvowel(str) {
  const arrayOfString = str.split("");
  const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const newString = [];

  for (let i = 0; i < arrayOfString.length; i++) {
    const el = arrayOfString[i];

    if (!vowel.includes(el)) {
      newString.push(el);
    }
  }

  return newString.join("");
}

console.log(disemvowel("This website is for losers LOL!"));
