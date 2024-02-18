## چالش: ماشین حساب

### دستورالعمل‌ها

یک تابع به نام `calculator` بنویسید که ۲ عدد و یک عملگر را دریافت کرده و نتیجه محاسبه را برمی‌گرداند.

### مثال‌ها

```JS
calculator(1, 2, '+') // 3
calculator(10, 5, '-') // 5
calculator(2, 2, '*') // 4
calculator(10, 5, '/') // 2
```

### محدودیت‌ها

- تابع باید یک عدد برگرداند.
- تابع باید یک خطا یا پیام خطا پرتاب یا ثبت کند اگر عملگر نامعتبر داده شود.

### راهنمایی‌ها

- شما می‌توانید از اعلان‌های `if` یا `switch` برای تعیین عملگر استفاده شده استفاده کنید.

## راه‌حل

<details>
  <summary>برای دیدن راه‌حل 1 کلیک کنید</summary>

#### با استفاده از `switch`:

```js
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('عملگر نامعتبر');
  }

  return result;
}
```

### توضیح

- یک تابع به نام `calculator` ایجاد شده است که سه آرگومان را دریافت می‌کند: `num1`، `num2` و `operator`.
- یک متغیر به نام `result` برای ذخیره نتیجه محاسبه ایجاد می‌شود.
- از یک اعلان `switch` برای تعیین عملگر استفاده شده است. اگر عملگر +، -، * یا / باشد، محاسبه انجام می‌شود. اگر عملگر هر چیز دیگری باشد، یک خطا پرتاب می‌شود.

</details>

<details>
 <summary>برای دیدن راه‌حل 2 کلیک کنید</summary>

#### با استفاده از اعلان `if`:

```js
function calculator(num1, num2, operator) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    throw new Error('عملگر نامعتبر');
  }

  return result;
}
```

### توضیح

- یک تابع به نام `calculator` ایجاد شده است که سه آرگومان را دریافت می‌کند: `num1`، `num2` و `operator`.
- یک متغیر به نام `result` برای ذخیره نتیجه محاسبه ایجاد می‌شود.
- از اعلان `if` برای تعیین عملگر استفاده شده است. اگر عملگر +، -، * یا / باشد، محاسبه انجام می‌شود. اگر عملگر هر چیز دیگری باشد، یک خطا پرتاب می‌شود.

 </details>

### مورد آزمایش

```js
test('انجام عملیات حسابی با استفاده از تابع calculator', () => {
  // ورودی‌های مورد آزمایش
  const num1 = 5;
  const num2 = 7;

  // جمع
  expect(calculator(num1, num2, '+')).toBe(12);

  // تفریق
  expect(calculator(num1, num2, '-')).toBe(-2);

  // ضرب
  expect(calculator(num1, num2, '*')).toBe(35);

  // تقسیم
  expect(calculator(num1, num2, '/')).toBeCloseTo(0.7143, 4);

  // عملگر نامعتبر
  expect(() => calculator(num1, num2, '^')).toThrow('عملگر نامعتبر');
});
```