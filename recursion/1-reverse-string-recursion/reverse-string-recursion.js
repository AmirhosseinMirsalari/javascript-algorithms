function reverseString(str) {
    if (str === '') {
      return '';
    }
  
    return reverseString(str.substr(1)) + str[0];
  }

module.exports = reverseString;
