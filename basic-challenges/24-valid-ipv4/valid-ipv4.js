const isValidIPv4 = (string) => {
  const arr = string.split(".");
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    const elInt = parseInt(el);

    if (elInt <= 0 || elInt > 255 || el[0] === "0" || arr.length !== 4) {
      return false;
    }
  }
  return true;
};

module.exports = isValidIPv4;
