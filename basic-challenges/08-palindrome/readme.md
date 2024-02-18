# چالش: پالیندروم

یک پالیندروم یک کلمه، عبارت، عدد یا دنباله دیگری از کاراکترها است که به یکسان عقب به جلو یا جلو به عقب خوانده می‌شود. یک مثال از یک پالیندروم "madam" است.

## دستورالعمل‌ها

یک تابع به نام `isPalindrome` بنویسید که یک رشته دریافت کرده و اگر رشته یک پالیندروم باشد، `true` و در غیر این صورت `false` را برگرداند.


### مثال‌ها

```JS
isPalindrome('madam') // true
isPalindrome('racecar') // true
isPalindrome('hello') // false
isPalindrome('') // true
```

### محدودیت‌ها

- رشته ورودی تنها حاوی حروف کوچک و فاصله‌ها خواهد بود.
- تابع باید فاصله‌ها را در هنگام بررسی پالیندروم بی‌توجه شود.

### راهنماها

- می‌توانید این کار را به یک شیوه مشابه با چالش معکوس کردن رشته با تعدادی مراحل اضافی حل کنید.
- به یاد داشته باشید که می‌خواهید هر کاراکتر غیر حروف و اعداد را از رشته حذف کنید قبل از مقایسه با رشته معکوس شده. راه‌های مختلفی برای انجام این کار وجود دارد، اما یک راه آن استفاده از متد `replace` با یک عبارت منظم `/[^a-z0-9]/g` است.

## روش‌ها

<details>
  <summary>برای راه حل 1 کلیک کنید</summary>

استفاده از `replace` با یک عبارت منظم راحت‌ترین راه برای حل این چالش است.

```js
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}
```

### توضیحات

- رشته ورودی را گرفته و آن را به حروف کوچک تبدیل می‌کنیم.
- از متد `replace` با یک عبارت منظم برای حذف هر کاراکتر غیر حروف و اعداد از رشته استفاده می‌کنیم. به این ترتیب می‌توانیم رشته را بدون نگرانی از فاصله‌ها یا نشانه‌ها مقایسه کنیم، مانند 'racecar' و 'race car'.
- نتیجه را در یک متغیر به نام `formattedStr` ذخیره می‌کنیم.
- رشته را معکوس می‌کنیم، همانطور که در چالش قبلی کردیم.
- رشته اصلی را با رشته معکوس مقایسه کرده و نتیجه را برمی‌گردانیم. اگر یک پالیندروم باشد، دو رشته برابر خواهند بود، بنابراین `true` را برمی‌گردانیم. اگر پالیندروم نباشد، دو رشته برابر نخواهند بود، بنابراین `false` را برمی‌گردانیم.

</details>

<details>
  <summary>برای راه حل 2 کلیک کنید</summary>

اگر نمی‌خواهید از عبارت منظم برای حذف کاراکترهای غیر حروف و اعداد استفاده کنید، راه‌های دیگری هم وجود دارد. ما قصد داریم تابع‌های کمکی ایجاد کنیم تا این کار را آسان‌تر کنیم.

```js
function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }


  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // اعداد 0-9
    (code >= 97 && code <= 122) // حروف کوچک a-z
  );
}

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

### توضیحات

این راه‌حل یکم دشوار است.

- یک تابع کمکی به نام `removeNonAlphanumeric` ایجاد کنید که یک رشته را دریافت کرده و یک رشته جدید با حذف تمام کاراکترهای غیر حروف و اعداد برگرداند. ما این کار را با حلقه تکراری انجام می‌دهیم و بررسی می‌کنیم که آیا هر کاراکتر حروفی است یا خیر با یک تابع کمکی دیگر به نام `isAlphaNumeric`.

- در تابع `isAlphaNumeric` از متد `charCodeAt` برای گرفتن کد کاراکتر استفاده می‌کنیم. سپس بررسی می‌کنیم که آیا کد کاراکتر بین 48 و 57 است که محدوده اعداد 0-9 است، یا آیا بین 97 و 122 است که محدوده حروف کوچک a-z است. اگر بله، `true` را برمی‌گردانیم. اگر خیر، `false` را برمی‌گردانیم.

- بعد از اینکه یک رشته با حروف و اعداد تهیه شد، می‌توانیم آن را معکوس کنیم و با رشته اصلی مقایسه کنیم تا ببینیم آیا یک پالیندروم است یا خیر.

</details>

### موارد آزمون

```js
test('بررسی رشته‌های پالیندروم', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('Hello')).toBe(false);
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  expect(isPalindrome('12321')).toBe(true);
});
```