function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
   const charCount = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
}

module.exports = validAnagrams;
