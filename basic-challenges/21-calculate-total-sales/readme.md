# چالش: محاسبه کل فروش

## دستورالعمل‌ها

از آرایه‌ای از اشیاء محصولات زیر استفاده کنید، هر کدام با نام، قیمت و تعداد فروخته شده خود. علاوه بر این، یک نرخ مالیات به عنوان درصد به شما داده شده است. یک تابع به نام `calculateTotalSalesWithTax` بنویسید که یک آرایه از اشیاء محصولات را به همراه نرخ مالیات دریافت کرده و مقدار کل فروش را از جمله مالیات بر می‌گرداند.

```js
const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];
```

### مثال‌ها

```js
calculateTotalSalesWithTax(
  [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
  ],
  8
); // 21.6 (20 + 8% مالیات)

calculateTotalSalesWithTax(
  [
    { name: 'Chocolate', price: 2.5, quantity: 5 },
    { name: 'Chips', price: 1.2, quantity: 10 },
    { name: 'Soda', price: 1.0, quantity: 8 },
    { name: 'Candy', price: 0.5, quantity: 15 },
  ],
  5
); // 42 (40 + 5% مالیات)
```

### محدودیت‌ها

- آرایه ورودی حداقل شامل یک شیء محصول خواهد بود.
- قیمت و تعداد مقادیر مثبتی خواهند بود.
- نرخ مالیات یک عدد مثبت کمتر از 100 خواهد بود.
- تا دو رقم اعشار.

### راهنماها

- مقدار کل فروش را قبل از اعمال مالیات محاسبه کنید، سپس مقدار مالیات را به آن اضافه کنید.

## راه حل‌ها

<details>
  <summary>برای راه حل کلیک کنید</summary>

این راه‌حل مقدار کل فروش را از جمله مالیات با حلقه تکراری از محصولات محاسبه می‌کند، جمع قیمت و تعداد هر محصول را محاسبه کرده و سپس مقدار مالیات را اضافه می‌کند.

```js
const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const taxAmount = (totalSales * taxRate) / 100;
  const totalSalesWithTax = totalSales + taxAmount;
  return totalSalesWithTax;
}
```

## توضیحات

- مقدار کل فروش را با استفاده از متد `reduce` برای حلقه روی آرایه محصولات، جمع قیمت و تعداد هر محصول را محاسبه کنید.
- مقدار مالیات را با ضرب کردن مقدار کل فروش در نرخ مالیات و تقسیم بر 100 محاسبه کنید.
- مقدار کل فروش را با مقدار مالیات اضافه کنید تا مقدار کل فروش را با مالیات به دست آورید.
- مقدار کل فروش را با مالیات را برگردانید.

</details>

### موارد آزمایشی

```js
test('محاسب

ه مقدار کل فروش همراه با مالیات', () => {
  expect(
    calculateTotalSalesWithTax(
      [
        { name: 'Apple', price: 0.5, quantity: 10 },
        { name: 'Banana', price: 0.3, quantity: 20 },
        { name: 'Orange', price: 0.6, quantity: 15 },
      ],
      8
    )
  ).toBe(21.6);

  expect(
    calculateTotalSalesWithTax(
      [
        { name: 'Chocolate', price: 2.5, quantity: 5 },
        { name: 'Chips', price: 1.2, quantity: 10 },
        { name: 'Soda', price: 1.0, quantity: 8 },
        { name: 'Candy', price: 0.5, quantity: 15 },
      ],
      5
    )
  ).toBe(42);
});
```
