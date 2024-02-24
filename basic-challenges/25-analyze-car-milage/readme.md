# چالش: تحلیل میزان کارکرد خودروها

## دستورالعمل‌ها

شما یک آرایه از اشیاء خودرو دارید، هر کدام شامل اطلاعاتی درباره ساختار، مدل، سال ساخت و میزان کارکرد خودرو هستند. هدف شما انجام یک تحلیل بر روی داده‌های میزان کارکرد خودرو با استفاده از متد‌های آرایه با درجه بالا است.

یک تابع به نام `analyzeCarMileage` پیاده‌سازی کنید که یک آرایه از اشیاء خودرو را به عنوان ورودی دریافت کرده و کارهای زیر را انجام دهد:

1. محاسبه میانگین میزان کارکرد تمامی خودروها.
2. پیدا کردن خودرو با بیشترین میزان کارکرد.
3. پیدا کردن خودرو با کمترین میزان کارکرد.
4. محاسبه مجموع میزان کارکرد تمامی خودروها.

تابع باید یک شیء حاوی مقادیر محاسبه شده را به عنوان خصوصیات برگرداند.

یک شیء که می‌توانید از آن برای آزمایش تابع خود در فایل اجرایی استفاده کنید، به صورت زیر است:

```js
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];
```

### مثال‌ها

```js
const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
  { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

const analysis = analyzeCarMileage(cars);
console.log(analysis);
// Output:
// {
//   averageMileage: 23333.33,
//   highestMileageCar: { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
//   lowestMileageCar: { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
//   totalMileage: 70000
// }
```

### محدودیت‌ها

- آرایه ورودی `cars` حداکثر شامل ۱۰۰ شیء خودرو خواهد بود.
- مقدار `mileage` هر شیء خودرو یک عدد مثبت خواهد بود.
- نتیجه باید به ۲ رقم اعشار گرد شود.

### راهنماها

- می‌توانید از متد `reduce` برای اکثر محاسبات استفاده کنید.

## راه‌حل

<details>
  <summary>برای راه‌حل کلیک کنید</summary>

```js
function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;
  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );


  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
```

### توضیحات

- یک متغیر `totalMileage` ایجاد کنید و آن را به نتیجه فراخوانی متد `reduce` روی آرایه `cars` را اختصاص دهید. مقدار اولیه `0` به عنوان مقدار اولیه اکمال کننده استفاده خواهد شد.
- یک متغیر `averageMileage` ایجاد کنید و آن را به نتیجه تقسیم `totalMileage` بر طول آرایه `cars` اختصاص دهید.
- یک متغیر `highestMileageCar` ایجاد کنید و آن را به نتیجه فراخوانی متد `reduce` روی آرایه `cars` اختصاص دهید. مقدار اولیه `cars[0]` به عنوان مقدار اولیه اکمال کننده استفاده خواهد شد.
- یک متغیر `lowestMileageCar` ایجاد کنید و آن را به نتیجه فراخوانی متد `reduce` روی آرایه `cars` اختصاص دهید. مقدار اولیه `cars[0]` به عنوان مقدار اولیه اکمال کننده استفاده خواهد شد.
- یک شیء حاوی مقادیر محاسبه شده را برگردانید. میانگین `averageMileage` را با استفاده از متد `toFixed` گرد کنید و به رقم اعشاری تبدیل کنید.

می‌دانم که `reduce` ممکن است کمی سخت به نظر برسد، بنابراین بیایید برای متغیر `highestMileageCar` واقعاً به تفصیل آن را بررسی کنیم. کد را دوباره برای مرجع تکرار می‌کنیم:

```js
const highestMileageCar = cars.reduce(
  (highest, car) => (car.mileage > highest.mileage ? car : highest),
  cars[0]
);
```

1. `reduce` دو آرگومان اصلی دارد: یک تابع و یک مقدار اولیه. مقدار اولیه به `cars[0]` تنظیم شده است که اولین خودرو در لیست است.
2. تابع دو پارامتر دارد: `highest` و `car`. `highest` ابتدا حاوی اولین خودرو است و `car` خودروی بعدی در لیست است.
3. برای هر خودرو، تابع میزان کارکرد کنونی `car.mileage` را با میزان کارکرد خودروی فعلی که فکر می‌شود بیشتر باشد `highest.mileage` مقایسه می‌کند.
4. اگر میزان کارکرد کنونی خودرو بیشتر باشد، مقدار `highest` را با خودروی کنونی جایگزین می‌کنیم.
5. اگر میزان کارکرد کنونی خودرو بیشتر نباشد، با خودرویی که فکر می‌کردیم بهترین است (highest)، ادامه می‌دهیم.
6. این فرآیند برای هر خودرو در لیست تکرار می‌شود.

هر چیزی که از بازگردانی کالبک برای متد `reduce` باشد، مقدار جدید اکمال کننده خواهد بود.

</details>

### موارد آزمایشی

```js
test('تحلیل داده‌های میزان کارکرد خودرو', () => {
  const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
  ];

  const analysis = analyzeCarMileage(cars);

  expect(analysis.averageMileage).toBeCloseTo(23333.33);
  expect(analysis.highestMileageCar).toEqual({
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    mileage: 30000,
  });
  expect(analysis.lowestMileageCar).toEqual({
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    mileage: 15000,
  });
  expect(analysis.totalMileage).toBe(70000);
});
```