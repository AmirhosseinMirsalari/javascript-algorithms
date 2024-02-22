function sumOfEvenSquares(arr) {
  return arr
    .filter((item) => item % 2 === 0)
    .map((item) => item * item)
    .reduce((sum, square) => sum + square, 0);


    // pure:
    
  //   let evenArr = [];
  //   let sum = 0;
  //   for (let index = 0; index < arr.length; index++) {
  //     if (arr[index] % 2 === 0) {
  //       sum += arr[index] ** 2;
  //     }
  //   }
  //   return sum;
}

module.exports = sumOfEvenSquares;
