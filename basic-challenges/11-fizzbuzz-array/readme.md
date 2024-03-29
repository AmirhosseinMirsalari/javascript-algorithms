# چالش: آرایه FizzBuzz

## دستورالعمل‌ها

فیزباز (FizzBuzz) احتمالاً پرسش متداول‌ترین مصاحبه برای توسعه‌دهندگان سطح ورودی است. حداقل به نظر می‌آید. این ممکن است دیگر به این اندازه مورد استفاده قرار نگیرد به دلیل میزان معمول بودن آن. این یک مسئله‌ی ساده است که توانایی شما در اندیشیدن به صورت منطقی و نوشتن کد تمیز را آزمایش می‌کند.

سنتی، شما از 1 تا 100 حلقه می‌زنید و هر عدد را چاپ می‌کنید. با این حال، اگر عدد بر 3 بخش‌پذیر باشد، به جای آن "Fizz" را چاپ می‌کنید. اگر عدد بر 5 بخش‌پذیر باشد، به جای آن "Buzz" را چاپ می‌کنید. اگر عدد بر هر دو 3 و 5 بخش‌پذیر باشد، به جای آن "FizzBuzz" را چاپ می‌کنید.

در این چالش، شما باید یک تابع به نام `fizzBuzzArray` بنویسید که یک عدد را دریافت کرده و یک آرایه را برمی‌گرداند. آرایه باید شامل تمامی اعداد از ۱ تا عدد ورودی باشد. اما اگر عدد بر ۳ بخش‌پذیر باشد، باید آن عدد را با "Fizz" جایگزین کنید. اگر عدد بر ۵ بخش‌پذیر باشد، باید آن عدد را با "Buzz" جایگزین کنید. و اگر عدد بر هر دو ۳ و ۵ بخش‌پذیر باشد، باید آن عدد را با "FizzBuzz" جایگزین کنید.


### مثال‌ها

```js
fizzBuzzArray(5); // [1, 2, "Fizz", 4, "Buzz"]
fizzBuzzArray(15); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

### محدودیت‌ها

- عدد ورودی همیشه بزرگتر از ۰ خواهد بود
- عدد ورودی همیشه یک عدد صحیح خواهد بود

### راهنماها

- به جای لاگ کردن هر عدد، شما باید هر عدد را در یک آرایه پوش کنید.

## راه‌حل‌ها

<details>
  <summary>برای دیدن راه‌حل کلیک کنید</summary>

```js
function fizzBuzz(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  return arr;
}
```

### توضیح

- یک آرایه خالی برای ذخیره نتایجمان ایجاد می‌کنیم.
- از 1 تا عدد ورودی حلقه می‌زنیم.
- ابتدا بررسی می‌کنیم که آیا عدد بر هم‌زمان 3 و 5 بخش‌پذیر است یا خیر. اگر بود، "FizzBuzz" را به آرایه اضافه می‌کنیم.
- اگر نبود، بررسی می‌کنیم که آیا عدد بر 3 بخش‌پذیر است یا خیر. اگر بود، "Fizz" را به آرایه اضافه می‌کنیم.
- اگر نبود، بررسی می‌کنیم که آیا عدد بر 5 بخش‌پذیر است یا خیر. اگر بود، "Buzz" را به آرایه اضافه می‌کنیم.
- اگر نبود، عدد را به آرایه اضافه می‌کنیم.
- آرایه را برمی‌گرد

انیم.

</details>

### موارد آزمون

```js
test('آرایه FizzBuzz', () => {
  expect(fizzBuzzArray(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});
```
