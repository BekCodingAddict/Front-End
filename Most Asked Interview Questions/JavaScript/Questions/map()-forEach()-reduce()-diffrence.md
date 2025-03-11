## ✅ What’s the difference between map(), forEach(), and reduce()?
>[NOTE]
>JavaScript에서 map(), forEach(), reduce()는 배열을 반복(iterate)하면서 각 요소를 처리하는 메서드입니다. 하지만 동작 방식과 반환 값(return value)이 다릅니다.


### 1. map() – 새로운 배열을 반환
map()은 배열의 각 요소를 변환한 후 새로운 배열을 반환합니다. 원본 배열은 변경되지 않습니다.

### ✅ 사용 예시
```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (원본 배열 변경 없음)
```
### 📌 특징
- ✅ 배열의 각 요소를 변경하고 싶을 때 사용
- ✅ 새로운 배열을 반환
- ✅ 원본 배열을 유지

### 2. forEach() – 단순 반복 (반환 값 없음)
forEach()는 배열을 순회하며 각 요소에 대해 주어진 함수를 실행하지만, 아무것도 반환하지 않습니다.

### ✅ 사용 예시
```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));

// 결과 출력: 
// 2
// 4
// 6
// 8
// 10

console.log(numbers); // [1, 2, 3, 4, 5] (원본 배열 변경 없음)

```

### 📌 특징
- ✅ 단순 반복 실행
- ✅ 새로운 배열을 반환하지 않음
- ✅ 원본 배열을 유지
- ✅ 값을 변환해야 한다면 map()을 사용하는 것이 더 적절함

### 3. reduce() – 배열을 하나의 값으로 축소
reduce()는 배열을 순회하면서 누적(accumulate)하여 하나의 값을 반환합니다.

### ✅ 사용 예시 (배열의 합 구하기)
```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
```
- acc → 누적 값 (accumulator)
- num → 현재 요소
- 0 → 초기값 (첫 번째 acc 값)

### ✅ 사용 예시 (배열에서 최댓값 찾기)
```js
const numbers = [10, 20, 5, 8, 30];

const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);

console.log(max); // 30
```

### 📌 특징
- ✅ 배열을 하나의 값으로 축소 (숫자, 객체, 배열 등)
- ✅ 누적 값(accumulator)을 사용
- ✅ map()처럼 배열을 변환할 수도 있지만, 보통 합계, 평균, 개수 계산 등에 사용됨


![image](https://github.com/user-attachments/assets/a1bcf47c-7a30-4bac-99e7-f6b7138a02ab)


### 📌 정리:

1. 배열을 변환할 때 → map()
2. 단순 반복 작업 → forEach()
3. 배열을 하나의 값으로 축소 → reduce()
