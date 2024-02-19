function removeDuplicates(arr) {
  let removeDuplicatesArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (!removeDuplicatesArr.includes(arr[index])) {
      removeDuplicatesArr.push(arr[index]);
    }
  }
  return removeDuplicatesArr;
}

module.exports = removeDuplicates;
