# چالش: شمارش حروف صداگذار

## دستورالعمل‌ها

تابعی به نام `countVowels` بنویسید که یک رشته را دریافت کرده و تعداد حروف صداگذار را در رشته برمی‌گرداند.


### مثال‌ها

```js
countVowels('hello'); // 2
countVowels('why'); // 0
countVowels('mississippi'); // 4
```

### محدودیت‌ها

- مهم نیست که رشته ورودی حروف بزرگ یا کوچک باشد.

### راهنمایی‌ها


## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل کلیک کنید</summary>

```js
function countVowels(str) {
  const formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];

    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  return count;
}
```

## توضیحات

- رشته را به حالت کوچک تبدیل کنید. این به دلیل این است که ما می‌خواهیم هم حروف بزرگ و هم حروف کوچک را بشماریم.
- یک متغیر به نام `count` ایجاد کنید و آن را برابر `0` قرار دهید. این متغیری است که برای ردیابی تعداد حروف صداگذار که پیدا کرده‌ایم استفاده می‌شود.
- یک حلقه `for` بسازید که از هر حرف در رشته عبور می‌کند. سپس یک متغیر به نام `char` ایجاد کرده و آن را برابر حرف فعلی در رشته قرار دهید.
- بررسی کنید که آیا حرف یک حرف صداگذار است یا خیر. اگر بله، `count` را با `1` افزایش دهید. بعد از اینکه از کل رشته عبور کرده‌ایم، `count` را برمی‌گردانیم.

</details>

### موارد آزمون

```js
test('شمارش حروف صداگذار در یک رشته', () => {
  expect(countVowels('Hello, World!')).toBe(3);
  expect(countVowels('JavaScript')).toBe(3);
  expect(countVowels('OpenAI Chatbot')).toBe(6);
  expect(countVowels('Coding Challenge')).toBe(5);
});
```