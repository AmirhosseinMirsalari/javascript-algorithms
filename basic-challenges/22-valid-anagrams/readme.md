# چالش: ان‌آگرام‌های معتبر

## دستورالعمل‌ها

یک تابع به نام `validAnagrams` بنویسید که دو رشته را دریافت کرده و تشخیص دهد که آیا آن‌ها ان‌آگرام‌های معتبر یکدیگر هستند یا خیر. ان‌آگرام، یک کلمه یا عبارت است که با ترتیب‌بندی حروف یک کلمه یا عبارت دیگر، معمولاً با استفاده از تمام حروف اصلی به دقت یکباره، شکل گرفته است.


### مثال‌ها

```js
validAnagrams('listen', 'silent'); // true
validAnagrams('hello', 'world'); // false
validAnagrams('astronomer', 'moonstarer'); // true
```

### راهنماها

- رشته‌ها را به آرایه‌هایی از حروف تقسیم کنید، سپس هر آرایه را به یک شیء از فرکانس‌های حروف برای رشته‌ها تبدیل کنید.
- فرکانس‌ها را مقایسه کنید.

## راه حل‌ها

<details>
  <summary>برای راه حل کلیک کنید</summary>

```js
function validAnagrams(str1, str2) {
  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}
```

### توضیحات

- یک متغیر به نام `freqCount1` ایجاد کرده و آن را به نتیجه فراخوانی `reduce` روی `str1.split('')` اختصاص دهید. این کار یک شیء ایجاد می‌کند که حاوی تعداد فرکانس هر حرف در `str1` است. به عنوان مثال، برای `freqCount1` در `validAnagrams('listen', 'silent')`، نتیجه `{ l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }` خواهد بود.
- همین کار را برای `freqCount2` انجام دهید و آن را به نتیجه فراخوانی `reduce` روی `str2.split('')` اختصاص دهید. این کار یک شیء ایجاد می‌کند که حاوی تعداد فرکانس هر حرف در `str2` است.
- `Object.keys` بررسی می‌کند که آیا هر حرف در `freqCount1` فرکانس یکسانی در `freqCount2` دارد یا خیر. اگر تمام فرکانس‌ها یکسان باشند، `every` `true` را برمی‌گرداند. اگر هر یک از فرکانس‌ها یکسان نباشد، `every` `false` را برمی‌گرداند و ما می‌دانیم که رشته‌ها ان‌آ

گرام معتبر نیستند.

</details>

### موارد آزمون

```js
test('بررسی ان‌آگرام‌های معتبر', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false);
});
```