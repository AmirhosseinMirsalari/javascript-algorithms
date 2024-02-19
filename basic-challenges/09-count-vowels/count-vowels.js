function countVowels(string) {
  let arr = ["a", "i", "o", "e", "u"];
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (arr.includes(string[index].toLowerCase())) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
