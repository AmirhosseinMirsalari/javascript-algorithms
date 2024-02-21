function displayLikes(arr) {
  let result = "";

  if (arr.length === 0) {
    result = "no one likes this";
  }
  if (arr.length === 1) {
    result = `${arr[0]} likes this`;
  }
  if (arr.length === 2) {
    result = `${arr[0]} and ${arr[1]} like this`;
  }
  if (arr.length === 3) {
    result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  }
  if (arr.length > 3) {
    result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }

  return result;
}

module.exports = displayLikes;
