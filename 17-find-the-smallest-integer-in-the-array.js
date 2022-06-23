class SmallestIntegerFinder {
  findSmallestInt(args) {
    let initialValue = args[0];

    for (let i = 0; i < args.length; i++) {
      const el = args[i];

      if (el < initialValue) initialValue = el;
    }

    return initialValue;
  }
}

const smallestFinder = new SmallestIntegerFinder();

console.log(smallestFinder.findSmallestInt([1, 56, 232, 12, 8]));
