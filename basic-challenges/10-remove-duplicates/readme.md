# چالش: حذف تکرارها

## دستورالعمل‌ها

تابعی به نام `removeDuplicates` بنویسید که یک آرایه را دریافت کرده و یک آرایه جدید با حذف تکرارها برمی‌گرداند.


### مثال‌ها

```js
removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // [1]
removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true]); // [1, 2, 3, 4, 5, true, 'hello']
```

### محدودیت‌ها

- آرایه می‌تواند هر نوع داده‌ای را شامل شود.

### راهنمایی‌ها

- می‌توانید این کار را با حلقه 'for' سنتی انجام دهید، اما اگر با شیء `Set` آشنایی دارید، می‌توانید از آن برای حل این مسأله استفاده کنید. شاید امتحان کردن هر دو راه مفید باشد!

## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل 1 کلیک کنید</summary>

استفاده از یک حلقه 'for'

```js
function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}
```

### توضیحات

- یک آرایه جدید به نام `uniqueArr` ایجاد کنید.
- یک حلقه `for` بسازید که از هر عنصر در آرایه عبور کند و بررسی کند که آیا عنصر فعلی در `uniqueArr` قرار دارد یا خیر.
- اگر نبود، آن را به `uniqueArr` اضافه کنید.
- بعد از اینکه از کل آرایه عبور کرده‌ایم، `uniqueArr` را برمی‌گردانیم.

</details>

<details>
  <summary>برای دیدن راه‌حل 2 کلیک کنید</summary>

استفاده از یک مجموعه

```js
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
```

### توضیحات

این راه‌حل بسیار ساده است. ما یک آرایه با تکرارها را دریافت می‌کنیم و یک `Set` جدید از آن آرایه ایجاد می‌کنیم. سپس آن `Set` را به آرایه تبدیل می‌کنیم و آن را برمی‌گردانیم.

دلیل کارکرد این راه‌حل این است که یک `Set` فقط می‌تواند مقادیر یکتا را شامل شود. بنابراین وقتی یک `Set` را از یک آرایه ایجاد می‌کنیم، به طور خودکار تمامی تکرارها حذف می‌شوند.

</details>

### موارد آزمون

```js
test('حذف تکرارها از یک آرایه', () => {
  expect(removeDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(
    removeDuplicates(['apple', 'banana', 'orange', 'banana', 'kiwi'])
  ).toEqual(['apple', 'banana', 'orange', 'kiwi']);
  expect(removeDuplicates([true, true, false, true, false])).toEqual([
    true,
    false,
  ]);
});
```