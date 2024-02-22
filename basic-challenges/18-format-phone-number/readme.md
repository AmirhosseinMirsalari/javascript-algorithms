# چالش: فرمت شماره تلفن

## دستورالعمل‌ها

یک تابع به نام `formatPhoneNumber` بنویسید که یک آرایه از اعداد دریافت کرده و یک رشته را به عنوان شماره تلفن تشکیل داده شده از اتصال اعداد در فرمت مشخص شده برگرداند.

### مثال‌ها

```js
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"
formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]); // => "(519) 555-4468"
formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]); // => "(345) 501-2527"
```

### محدودیت‌ها

- آرایه ورودی همواره 10 عدد خواهد داشت.
- اعداد می‌توانند هر عدد صحیح از 0 تا 9 باشند.

### راهنماها

- می‌توانید از متد `Array.join` برای اتصال اعداد در آرایه استفاده کنید.
- می‌توانید از متد `Array.slice` برای دریافت یک زیرمجموعه از آرایه استفاده کنید.

## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل 1 کلیک کنید </summary>

استفاده از `Array.slice`:

```js
function formatPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join('');
  const prefix = numbers.slice(3, 6).join('');
  const lineNumber = numbers.slice(6).join('');

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
```

### توضیح

- 3 متغیر برای ذخیره‌سازی کد منطقه، پیش‌شماره و شماره خط ایجاد می‌کنیم.
- از متد `Array.slice` برای دریافت یک زیرمجموعه از آرایه استفاده می‌کنیم.
- از متد `Array.join` برای اتصال اعداد در آرایه استفاده می‌کنیم.

</details>

<details>
  <summary>برای دیدن راه‌حل 2 کلیک کنید </summary>

استفاده از `String.substring`:

```js
function formatPhoneNumber(numbers) {
  const formatted = numbers.join('');
  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}
```

### توضیح

- یک متغیر برای ذخیره اعداد در آرایه پشت‌سرهم ایجاد می‌کنیم.
- از متد `String.substring` برای دریافت یک زیررشته از رشته استفاده می‌کنیم.

</details>

<details>
  <summary>برای دیدن راه‌حل 3 کلیک کنید </summary>

استفاده از یک تابع فرمان کوتاه:

```js
const formatPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers
    .slice(6)
    .join('')}`;
```

### توضیح

این مشابه راه‌حل دوم است، اما ما از یک تابع فرمان و متد `Array.slice` چین‌کردنی استفاده کرده‌ایم.

</details>

### موارد آزمون

```js
test('Format Phone Number', () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    '(123) 456-7890'
  );
  expect(formatPhoneNumber([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe(
    '(502) 481-9637'
  );
  expect(formatPhoneNumber([9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toBe(
    '(999) 999-9999'
  );
});
```