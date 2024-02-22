function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(array[0]);

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== alphabet[startIndex + index]) {
      return alphabet[startIndex + index];
    }
  }
  return "";
}

module.exports = findMissingLetter;
