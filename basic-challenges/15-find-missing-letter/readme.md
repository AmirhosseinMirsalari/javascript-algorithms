# چالش: پیدا کردن حرف گم‌شده

## دستورالعمل‌ها

یک تابع به نام `findMissingLetter` بنویسید که یک آرایه از حروف متوالی (صعودی) را به عنوان ورودی دریافت کند و حرف گم‌شده در آرایه را برگرداند.

### مثال‌ها

```js
findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
```

### محدودیت‌ها

- آرایه ورودی تنها شامل حروف یک حالت (بزرگ یا کوچک) خواهد بود.
- اگر هیچ حرفی در آرایه نباشد، باید یک رشته خالی برگرداند

### راهنماها

- می‌توانید الفبا را در یک رشته قرار دهید و از متد `indexOf` برای دریافت اندیس یک حرف در رشته الفبا استفاده کنید.
- روش دیگری که می‌توانید استفاده کنید، استفاده از متد `charCodeAt` برای دریافت مقدار یونیکد یک حرف است.

## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل 1 کلیک کنید </summary>

```js
function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return '';
}
```

### توضیح

- یک متغیر `alphabet` تعریف می‌کنیم و آن را به یک رشته از تمامی حروف الفبا مقداردهی می‌کنیم.
- یک متغیر `startIndex` تعریف می‌کنیم و به آن اندیس اولین حرف آرایه ورودی در رشته `alphabet` را مقداردهی می‌کنیم.
- از آرایه ورودی حلقه می‌زنیم و بررسی می‌کنیم که آیا حرف فعلی در آرایه ورودی با حرف موجود در اندیس فعلی در رشته `alphabet` برابر نیست یا خیر.
- اگر برابر نبود، حرف موجود در اندیس فعلی در رشته `alphabet` را برمی‌گردانیم.
- اگر به انتهای حلقه برسیم و هیچ چیزی برنگردانیم، یک رشته خالی برمی‌گردانیم.

</details>

<details>
  <summary>برای دیدن راه‌حل 2 کلیک کنید </summary>

```js
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return '';
}
```

### توضیح

- یک متغیر `start` تعریف می‌کنیم و به آن کد ASCII اولین حرف آرایه ورودی را مقداردهی می‌کنیم.
- از آرایه ورودی حلقه می‌زنیم و بررسی می‌کنیم که آیا کد ASCII حرف فعلی منهای کد ASCII حرف قبلی بزرگ‌تر از 1 است یا خیر.
- اگر بزرگ‌تر باشد، حرفی که یکی بیشتر از حرف قبلی است را برمی‌گردانیم.
- اگر به انتهای حلقه برسیم و هیچ چیزی برنگردانیم، یک رشته خالی برمی‌گردانیم.

</details>

### موارد آزمون

```js
test('پیدا کردن حرف گم‌شده', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'e'])).toBe('d');
  expect(findMissingLetter(['X', 'Z'])).toBe('Y');
  expect(findMissingLetter(['m', 'n', 'o', 'q', 'r'])).toBe('p');
  expect

(findMissingLetter(['F', 'G', 'H', 'J'])).toBe('I');
});
```