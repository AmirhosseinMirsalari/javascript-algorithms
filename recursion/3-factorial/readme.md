# چالش: محاسبه فاکتوریل با استفاده از بازگشت

## توضیحات

فاکتوریل یک عدد/عدد صحیح، حاصلضرب آن عدد و تمامی اعداد زیر آن است. به عنوان مثال، `5!` (فاکتوریل 5).

```text
- 0! = 1
- 1! = 1
- 2! = 2 * 1 = 2
- 3! = 3 * 2 * 1 = 6
- 4! = 4 * 3 * 2 * 1 = 24
- 5! = 5 * 4 * 3 * 2 * 1 = 120
```

تابع فاکتوریل به طور معمول در مختلف برنامه‌های ریاضی و برنامه‌نویسی استفاده می‌شود. با افزایش `n`، به سرعت افزایش می‌یابد که آن را یک چالش مناسب برای کاوش توابع بازگشتی می‌سازد.

## دستورالعمل‌ها

یک تابع به نام `factorial` بنویسید که یک عدد را دریافت کرده و فاکتوریل آن عدد را برمی‌گرداند.

### امضای تابع

```js
/**
 * فاکتوریل عدد را برمی‌گرداند.
 * @param {number} num - عدد.
 * @returns {number} - فاکتوریل عدد.
 */
function factorial(num: number): number;
```

### محدودیت‌ها

- عدد ورودی همیشه یک عدد صحیح مثبت خواهد بود

### راهنماها

- بررسی کنید که آیا عدد صفر یا یک است. اگر بله، عدد 1 را برگردانید.
- می‌توانید از بازگشت برای محاسبه فاکتوریل استفاده کنید که با ضرب کردن عدد فعلی با فاکتوریل عدد قبلی تا زمانی که به حالت پایه برسید، انجام می‌شود.

### مثال‌ها

```js
factorial(0); // 1
factorial(5); // 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
factorial(10); // 3628800 (10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800)
```

## راه‌حل‌ها

<details>
  <summary>برای راه‌حل کلیک کنید </summary>

```js
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}
```

### توضیحات

تابع فاکتوریل فاکتوریل عدد داده شده را با استفاده از بازگشت محاسبه می‌کند.

اگر عدد ورودی 0 یا 1 باشد، به حالت پایه می‌رسیم و تابع 1 را برمی‌گرداند زیرا `0!` و `1!` هر دو به عنوان 1 تعریف شده‌ان

د.

برای سایر اعداد ورودی، مورد بازگشتی اجرا می‌شود. تابع فاکتوریل را با ضرب کردن عدد فعلی `num` با فاکتوریل عدد `num - 1` که به صورت بازگشتی محاسبه می‌شود، فراخوانی می‌کند. این فرآیند تا زمانی ادامه پیدا می‌کند که به حالت پایه برسیم و در این زمان بازگشت شروع به "بازگشت" می‌شود و نتیجه نهایی بدست می‌آید.

بیایید گام به گام فاکتوریل(5) را محاسبه کنیم:

```js
factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 (حالت پایه)
```

بازگشت از بازگشت:

```js
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
factorial(5) = 5 * 24 = 120
```

نتیجه نهایی به درستی `120` است که فاکتوریل 5 است.

</details>

### موارد آزمایشی

```js
test('فاکتوریل 0 باید 1 باشد', () => {
  expect(factorial(0)).toBe(1);
});

test('فاکتوریل 5 باید 120 باشد', () => {
  expect(factorial(5)).toBe(120);
});

test('فاکتوریل 10 باید 3628800 باشد', () => {
  expect(factorial(10)).toBe(3628800);
});
```