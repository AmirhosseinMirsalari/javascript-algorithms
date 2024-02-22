function calculateTotalSalesWithTax(products, tax) {
  //   const sumPriceProdcuts = products.reduce(
  //     (sum, product) => sum + product.price * product.quantity,
  //     0
  //   );
  //   return sumPriceProdcuts + (sumPriceProdcuts * tax) / 100;

  //  js pure:

  let sumPriceProdcuts = 0;

  for (let index = 0; index < products.length; index++) {
    sumPriceProdcuts += products[index].price * products[index].quantity;
  }

  return sumPriceProdcuts + (sumPriceProdcuts * tax) / 100;
}

module.exports = calculateTotalSalesWithTax;
