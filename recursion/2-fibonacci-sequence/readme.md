# چالش: دنباله فیبوناچی با استفاده از بازگشت

در درس قبلی، به یک مثال بسیار ساده از بازگشت نگاه کردیم. اکنون می‌خواهم به یک مثال بسیار معروف که اغلب با استفاده از بازگشت استفاده می‌شود، یعنی دنباله فیبوناچی، نگاه کنیم. این ممکن است یکی از سوالاتی باشد که در مصاحبه با شما مطرح شود، بنابراین مهم است که بفهمید چگونه کار می‌کند. شما همچنین می‌توانید از حلقه‌ها برای حل این مسئله استفاده کنید، اما بازگشت یک راه حل خوش‌آمدتر است. بعداً نیز به استفاده از یک درخت دودویی برای حل این مسئله خواهیم پرداخت.

## دنباله فیبوناچی چیست؟

دنباله فیبوناچی یک سری اعداد است که دنباله با 0 و 1 آغاز می‌شود، و سپس هر عدد مجموع دو عدد قبلی آن است. بنابراین دنباله به این صورت خواهد بود:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34...`

`F(n) = F(n-1) + F(n-2)` فرمول دنباله فیبوناچی است.

- `F(n)` عدد در دنباله است.
- `F(n-1)` عدد قبلی آن است.
- `F(n-2)` عدد قبل از آن است.

بنابراین اگر بخواهیم عدد 5 ام در دنباله را پیدا کنیم، این کار را انجام می‌دهیم:

`F(5) = F(4) + F(3)`
`F(4) = F(3) + F(2)`
`F(3) = F(2) + F(1)`
`F(2) = F(1) + F(0)`
`F(1) = 1`
`F(0) = 0`

بنابراین می‌توانیم ببینیم که `F(2) = 1 + 0 = 1`، `F(3) = 1 + 1 = 2`، `F(4) = 2 + 1 = 3`، و `F(5) = 3 + 2 = 5` است. بنابراین عدد 5 ام در دنباله برابر با 5 است.

## دستورالعمل‌ها

یک تابع به نام `fibonacci` بنویسید که یک عدد را دریافت کرده و عدد متناظر با آن اندیس از دنباله فیبوناچی را برمی‌گرداند.

### امضای تابع

```js
/**
 * عدد را در اندیس داده شده از دنباله فیبوناچی برمی‌گرداند.
 * @param {number} num - اندیس دنباله فیبوناچی.
 * @returns {number} - عدد در اندیس داده شده از دنباله فیبوناچی.
 */
function fibonacci(num: number): number;
```

### مثال‌ها

```js
fibonacci(4); // 3
fibonacci(6); // 8
fibonacci(10); // 55
```

### محدودیت‌ها

- عدد ورودی همیشه یک عدد صحیح مثبت خواهد بود

### راهنماها

- می‌دانید که فرمول `F(n) = F(n-1) + F(n-2)` است. `F`` تابع است و `n` عدد در دنباله است.
- می‌دانید که دو عدد اول در دنباله `0` و `1` هستند. بنابراین اگر عدد کمتر از 2 باشد، می‌توانید عدد را برگردانید.

## راه‌حل‌ها

<details>
  <summary>برای راه‌حل کلیک کنید</summary>

```js
function fibonacci(num) {
  // حالت پایه
  if (num < 2) return num;

  // حالت بازگشتی
  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

### توضیحات

- داریم آنچه را حالت پایه می‌نامیم، که زمانی است که عدد کمتر از 2 است.
- اگر این شرط درست باشد، عدد را برمی‌گردانیم.
- اگر این شرط درست نباشد، حالت بازگشتی را اجرا می‌کنیم

 که جمع دو عدد قبلی را برمی‌گرداند. این فرآیند تا زمانی ادامه دارد که عدد کمتر از 2 شود.

بیایید این مورد را گام به گام با یک مثال که ورودی num آن 5 است بررسی کنیم:

1. فراخوانی اولیه: `fibonacci(5)` فراخوانی می‌شود.
2. فراخوانی بازگشتی 1: `fibonacci(5)` `fibonacci(4) + fibonacci(3)` را فراخوانی می‌کند.
3. فراخوانی بازگشتی 2: `fibonacci(4)` `fibonacci(3) + fibonacci(2)` را فراخوانی می‌کند.
4. فراخوانی بازگشتی 3: `fibonacci(3)` `fibonacci(2) + fibonacci(1)` را فراخوانی می‌کند.
5. حالت پایه 1: `fibonacci(2)` 1 را برمی‌گرداند.
6. حالت پایه 2: `fibonacci(1)` 1 را برمی‌گرداند.
7. فرآیند بازگشتی: همانطور که فراخوانی‌های بازگشتی برمی‌گردند، تابع نتایج را جمع می‌کند:

- `fibonacci(1)` 1 را برمی‌گرداند.
- `fibonacci(2)` 1 را برمی‌گرداند.
- `fibonacci(3)` `fibonacci(2) + fibonacci(1)` = 1 + 1 = `2` را برمی‌گرداند.
- `fibonacci(4)` `fibonacci(3) + fibonacci(2)` = 2 + 1 = `3` را برمی‌گرداند.
- `fibonacci(5)` `fibonacci(4) + fibonacci(3)` = 3 + 2 = `5` را برمی‌گرداند.

بنابراین، `fibonacci(5)` عدد `5` را که پنجمین عدد در دنباله فیبوناچی است برمی‌گرداند.

می‌توانیم این را به یک خط کوتاه‌تر تبدیل کنیم با استفاده از اپراتور دوتایی:

```js
const fibonacci = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
```

</details>

### موارد آزمایشی

```js
describe('fibonacci', () => {
  it('should return the correct Fibonacci number', () => {
    expect(fibonacci(0)).toBe(0); // اولین عدد فیبوناچی 0 است
    expect(fibonacci(1)).toBe(1); // دومین عدد فیبوناچی 1 است
    expect(fibonacci(2)).toBe(1); // سومین عدد فیبوناچی 1 است (0 + 1)
    expect(fibonacci(3)).toBe(2); // چهارمین عدد فیبوناچی 2 است (1 + 1)
    expect(fibonacci(4)).toBe(3); // پنجمین عدد فیبوناچی 3 است (1 + 2)
    expect(fibonacci(5)).toBe(5); // ششمین عدد فیبوناچی 5 است (2 + 3)
    expect(fibonacci(6)).toBe(8); // هفتمین عدد فیبوناچی 8 است (3 + 5)
    expect(fibonacci(7)).toBe(13); // هشتمین عدد فیبوناچی 13 است (5 + 8)
  });
});
```