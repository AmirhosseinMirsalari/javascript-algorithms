function areAllCharactersUnique(str) {
  const chars = str.split("");

  const uniqueChars = chars.filter((char, index) => {
    return chars.indexOf(char) === index;
  });

  return uniqueChars.length === chars.length;
}

module.exports = areAllCharactersUnique;
