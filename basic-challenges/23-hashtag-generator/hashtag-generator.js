function generateHashtag(string) {
  const arrStr = string.split(" ").map((el) => {
    if (el.length > 0) {
      return el[0].toUpperCase() + el.slice(1);
    }
    return el;
  });

  const hashtag = `#${arrStr.join("").trim()}`;

  if (hashtag.length >= 140 || !string.trim().length) {
    return false;
  }
  return hashtag;
}

module.exports = generateHashtag;
