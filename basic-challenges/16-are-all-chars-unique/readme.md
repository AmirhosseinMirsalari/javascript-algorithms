# چالش: آیا همهٔ حروف یکتا هستند؟

## دستورالعمل‌ها

یک تابع به نام `areAllCharactersUnique` بنویسید که یک رشته دریافت کرده و بسته به اینکه آیا همهٔ حروف در رشته یکتا هستند یا نه (بدین معنی که هیچ حرفی تکرار نشود)، `true` یا `false` برگرداند.

### مثال‌ها

```js
areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
```

### محدودیت‌ها

- این حالت‌حساس به حروف بزرگ و کوچک است، بنابراین `a` و `A` به عنوان حروف متفاوت در نظر گرفته می‌شوند
- یک رشته خالی به صورت پیش‌فرض باید `true` را برگرداند

### راهنماها

- می‌توانید از یک حلقه for استفاده کنید تا از طریق رشته حرکت کنید و بررسی کنید که آیا حرف فعلی در مجموعه یا شیء است یا خیر.

## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل 1 کلیک کنید </summary>

استفاده از `Set`:

```js
function areAllCharactersUnique(str) {
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}
```

### توضیح

- یک `Set` جدید برای پیگیری حروفی که تاکنون دیده‌ایم ایجاد می‌کنیم.

- از طریق رشته حلقه می‌زنیم و بررسی می‌کنیم که حرف فعلی در مجموعه است یا نه. اگر بود، `false` را برمی‌گردانیم زیرا این بدان معناست که حرف را قبلاً دیده‌ایم. اگر نبود، آن را به مجموعه اضافه می‌کنیم.

- اگر بدون برگشت `false` از حلقه بیرون بیاییم، `true` را برمی‌گردانیم زیرا این بدان معناست که هیچ حرفی بیش از یک بار دیده نشده است.

</details>

<details>
  <summary>برای دیدن راه‌حل 2 کلیک کنید </summary>

استفاده از یک شیء:

```js
function areAllCharactersUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }

  return true;
}
```

### توضیح

این راه‌حل شبیه به راه‌حل اول است، با این تفاوت که از یک شیء به جای

 یک `Set` برای پیگیری حروف استفاده می‌شود.

سپس از طریق رشته حلقه می‌زنیم و بررسی می‌کنیم که حرف فعلی در شیء است یا نه. اگر بود، `false` را برمی‌گردانیم زیرا این بدان معناست که حرف را قبلاً دیده‌ایم. اگر نبود، آن را به شیء اضافه می‌کنیم.

- اگر بدون برگشت `false` از حلقه بیرون بیاییم، `true` را برمی‌گردانیم زیرا این بدان معناست که هیچ حرفی بیش از یک بار دیده نشده است.

</details>

### موارد آزمون

```js
test('حروف یکتا در یک رشته', () => {
  expect(areAllCharactersUnique('abcdefg')).toBe(true);
  expect(areAllCharactersUnique('abcdefgA')).toBe(true);
  expect(areAllCharactersUnique('programming')).toBe(false);
  expect(areAllCharactersUnique('')).toBe(true);
  expect(areAllCharactersUnique('a')).toBe(true);
});
```