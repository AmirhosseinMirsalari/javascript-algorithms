# چالش: نمایش پسندیدگی‌ها

## دستورالعمل‌ها

تابعی به نام `displayLikes` بنویسید که یک آرایه از نام‌ها را گرفته و یک رشته را برمی‌گرداند که نشان‌دهنده افرادی است که این پست را پسندیده‌اند.

تابع باید یک رشته با قالب زیر را برگرداند:

- اگر هیچ‌کس آن را پسندیده نباشد، باید `'no one likes this'` را برگرداند
- اگر یک نفر آن را پسندیده باشد، باید `'{name} likes this'` را برگرداند
- اگر دو نفر آن را پسندیده باشند، باید `'{name1} and {name2} like this'` را برگرداند
- اگر سه نفر آن را پسندیده باشند، باید `'{name1}, {name2} and {name3} like this'` را برگرداند
- اگر بیش از سه نفر آن را پسندیده باشند، باید `'{name1}, {name2} and {x} others like this'` را برگرداند


### مثال‌ها

```JS
displayLikes([]) // 'no one likes this'
displayLikes(['Peter']) // 'Peter likes this'
displayLikes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
displayLikes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'
displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']) // 'Alex, Jacob and 3 others like this'
```

### محدودیت‌ها

- آرایه ورودی تنها شامل رشته‌ها خواهد بود.

### راهنماها

## راه‌حل‌ها

<details>
  <summary>برای راه‌حل کلیک کنید</summary>

```js
function displayLikes(names) {
  const length = names.length;

  if (length === 0) {
    return 'no one likes this';
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}
```

### توضیحات

این بسیار ساده است زیرا فقط نیاز به چندین اظهارات if دارد. ما همچنین می‌توانیم از یک عبارت switch در اینجا استفاده کنیم، اما این کمی بیشتر اطلاعاتی خواهد بود.

- طول آرایه را بگیرید و سپس بررسی کنید که آیا ۰، ۱، ۲، ۳ یا بیشتر است. بسته به طول، رشته مناسب را برمی‌گردانیم.
- اگر بیشتر از ۳ نام وجود داشته باشد، ابتدا دو نام اول را برمی‌گردانیم، و سپس طول منهای ۲ برای تعداد دیگران.

</details>

### آزمون موارد

```js
test('نمایش پسندیدگی‌ها', () => {
  expect(displayLikes([])).toEqual('no one likes this');
  expect(displayLikes(['Peter'])).toEqual('Peter likes this');
  expect(displayLikes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
  expect(displayLikes(['Max', 'John', 'Mark'])).toEqual(
    'Max, John and Mark like this'
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
    'Alex, Jacob and 2 others like this'
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill'])).toEqual(
    'Alex, Jacob and 3 others like this'
  );
});
```