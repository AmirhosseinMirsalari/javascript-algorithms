function flattenArray(numbers) {
  let result = [];
  for (const number of numbers) {
    if (Array.isArray(number)) {
      result = result.concat(flattenArray(number));
    } else {
      result.push(number);
    }
  }
  return result;
}

module.exports = flattenArray;
