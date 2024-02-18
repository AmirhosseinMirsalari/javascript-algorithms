function calculator(a, b, calculate) {
  let result;

  switch (calculate) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      throw new Error("Invalid operator");
  }
  return result;
}

module.exports = calculator;
