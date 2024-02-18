function findMaxNumber(arr) {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    arr[index] > max && (max = arr[index]);
  }
  return max;
}

module.exports = findMaxNumber;
