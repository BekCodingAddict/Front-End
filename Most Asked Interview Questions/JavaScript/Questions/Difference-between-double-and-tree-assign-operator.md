## Difference between == and ===?
== 와 === 의 차이점은 느슨한 비교(loose equality) 와 엄격한 비교(strict equality) 에 있습니다.

### 1. == (느슨한 비교)
- 값만 비교하며, 데이터 타입이 다르면 자동으로 타입 변환(coercion) 후 비교합니다.
- 예제:
```js
console.log(5 == "5");  // true  (문자열 "5"가 숫자 5로 변환됨)
console.log(true == 1);  // true  (true가 숫자 1로 변환됨)
console.log(null == undefined);  // true (둘 다 값이 없다고 간주됨)
```
### 2. === (엄격한 비교)
값과 데이터 타입 모두 비교하며, 타입 변환 없이 그대로 비교합니다.
예제:
js
Copy
console.log(5 === "5");  // false (숫자와 문자열은 다름)
console.log(true === 1);  // false (boolean과 숫자는 다름)
console.log(null === undefined);  // false (타입이 다름)

### 결론
✅ === 를 사용하는 것이 일반적으로 더 안전합니다.
✅ == 는 의도하지 않은 타입 변환 때문에 예측하기 어려운 결과가 나올 수 있습니다.
✅ 타입 변환이 필요한 경우는 명시적으로 변환(Number(), String(), Boolean())하는 것이 좋습니다.
