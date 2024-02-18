تابع `titleCase` را بنویسید که یک رشته را دریافت کرده و رشته را با این ویژگی تغییر دهد که حرف اول هر کلمه بزرگ شود.


### مثال‌ها

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase('sHoRt AnD sToUt'); // Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
```

### محدودیت‌ها

- می‌توانید فرض کنید که هر کلمه فقط از حروف و فاصله تشکیل شده است.

### راهنمایی‌ها

## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل 1 کلیک کنید</summary>

```php
function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}
```

### توضیح

- رشته را به آرایه‌ای از کلمات تبدیل کرده و همه آنها را به حالت کوچک تبدیل می‌کنیم.
- از طریق آرایه حرکت می‌کنیم و حرف اول هر کلمه را با استفاده از اندیس 0 کلمه و اضافه کردن بخش دیگر کلمه بزرگ می‌کنیم.
- آرایه را به رشته تبدیل کرده و آن را برمی‌گردانیم.

</details>

<details>
  <summary>برای دیدن راه‌حل 2 کلیک کنید</summary>

```js
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
```

## توضیح

در این مثال، از متد replace برای یافتن حرف اول هر کلمه و جایگزینی آن با نسخه بزرگش استفاده می‌کنیم.

الگوی regex `/\b\w/g` حرف اول هر کلمه را مطابقت می‌دهد.

- `\b` مرز کلمه را مطابقت می‌دهد
- `\w` حرف اول هر کلمه را مطابقت می‌دهد
- پرچم `g` برای جایگزینی تمام موارد الگو در رشته استفاده می‌شود

آرگومان دوم یک تابع بازخوانی است که نسخه بزرگ حرف مطابقتی را برمی‌گرداند.

</details>

### مورد آزمایش

```js
test('تبدیل رشته به حالت بزرگ', () => {
  expect(titleCase('hello world')).toBe('Hello World');
  expect(titleCase('javascript programming')).toBe('Javascript Programming');
  expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
});
```
