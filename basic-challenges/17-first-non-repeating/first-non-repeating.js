function findFirstNonRepeatingCharacter(str) {
  const chars = str.split("");
  const uniqueChars = [];
  for (let index = 0; index < chars.length; index++) {
    if (!uniqueChars.includes(chars[index])) {
      uniqueChars.push(chars[index]);
    }
  }

  for (let char of uniqueChars) {
    if (chars.filter((c) => c === char).length === 1) {
      return char;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
