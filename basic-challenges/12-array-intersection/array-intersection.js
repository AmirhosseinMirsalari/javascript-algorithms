function arrayIntersection(arr1, arr2) {
  let newArr = [];
  for (let index = 0; index < arr1.length; index++) {
    if (arr2.includes(arr1[index]) && !newArr.includes(arr1[index])) {
      newArr.push(arr1[index]);
    }
  }
  return newArr;
}

module.exports = arrayIntersection;
