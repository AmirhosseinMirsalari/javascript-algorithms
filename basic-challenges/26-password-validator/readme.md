# چالش: اعتبارسنجی رمز عبور

## دستورالعمل‌ها

تابعی به نام `validatePassword` بنویسید که یک رشته را به عنوان ورودی دریافت کرده و بر اساس معیارهای زیر اعتبار آن را بررسی کند:

1. رمز عبور باید حداقل ۸ کاراکتر باشد.
2. رمز عبور باید حداقل یک حرف بزرگ داشته باشد.
3. رمز عبور باید حداقل یک حرف کوچک داشته باشد.
4. رمز عبور باید حداقل یک عدد داشته باشد.

اگر رمز عبور بر اساس معیارها اعتبار داشته باشد، تابع باید `true` را برگرداند و در غیر این صورت `false` را برگرداند.

### مثال‌ها

```js
validatePassword('Abc12345'); // باید true را برگرداند
validatePassword('password123'); // باید false را برگرداند (بدون حرف بزرگ)
validatePassword('Pass'); // باید false را برگرداند (طول کمتر از ۸ کاراکتر)
validatePassword('HelloWorld'); // باید false را برگرداند (بدون عدد)
```

### محدودیت‌ها

- رمز عبور ورودی می‌تواند هر ترکیبی از حروف و ارقام باشد.
- رمز عبور ورودی می‌تواند شامل حروف بزرگ و کوچک باشد.

### راهنماها

- می‌توانید از تابع `split` برای تبدیل رشته به آرایه‌ای از کاراکترها استفاده کنید و سپس از تابع `some` برای بررسی اینکه حداقل یک کاراکتر شرط خاصی را برآورده می‌کند استفاده کنید.

## راه‌حل

<details>
  <summary>برای راه‌حل کلیک کنید</summary>

```js
function validatePassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUppercase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}
```

### توضیحات

- یک متغیر به نام `isLengthValid` ایجاد کنید و اگر رمز عبور حداقل ۸ کاراکتر باشد، مقدار `true` را بدهید و در غیر این صورت `false` را.
- یک متغیر به نام `hasUppercase` ایجاد کنید و اگر رمز عبور حداقل یک حرف بزرگ داشته باشد، مقدار `true` را بدهید و در غیر این صورت `false` را.
- یک متغیر به نام `hasLowercase` ایجاد کنید و اگر رمز عبور حداقل یک حرف کوچک داشته باشد، مقدار `true` را بدهید و در غیر این صورت `false` را.
- یک متغیر به نام `hasDigit` ایجاد کنید و اگر رمز عبور حداقل یک عدد داشته باشد، مقدار `true` را بدهید و در غیر این صورت `false` را.
- نتیجه عبارت `isLengthValid && hasUppercase && hasLowercase && hasDigit` را برگردانید.

تابع `some` برای بررسی اینکه حداقل یک کاراکتر در رمز عبور شرط خاصی را برآورده کند، استفاده می‌شود. تابع `some` یک تابع کالبک را به عنوان آرگومان می‌پذیرد. تابع کالبک برای هر کاراکتر در رمز عبور فراخوانی می‌شود. اگر تابع کالبک برای حداقل یک کاراکتر `true` برگردان

د، آنگاه تابع `some` `true` را برمی‌گرداند. در غیر این صورت، تابع `some` `false` را برمی‌گرداند.

</details>

### موارد آزمایشی

```js
test('اعتبارسنجی رمز عبور', () => {
  expect(validatePassword('Abc12345')).toBe(true);
  expect(validatePassword('password123')).toBe(false);
  expect(validatePassword('Pass')).toBe(false);
  expect(validatePassword('HelloWorld')).toBe(false);
});
```