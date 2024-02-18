function reverseString(string) {
  let str = "";

  for (let index = string.length - 1; index >= 0; index--) {
    str += string[index];
  }
  return str;
}

module.exports = reverseString;
