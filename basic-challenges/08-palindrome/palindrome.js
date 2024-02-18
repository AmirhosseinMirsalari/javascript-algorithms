function isPalindrome(string) {
  let normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let finish = "";

  for (let index = normalizedString.length - 1; index >= 0; index--) {
    finish += normalizedString[index];
  }
  return finish === normalizedString;
}

module.exports = isPalindrome;
