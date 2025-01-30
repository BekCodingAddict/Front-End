## Explain closures and give an example.
클로저(Closure)는 함수와 그 함수가 선언될 때의 렉시컬 환경(상위 함수의 변수들)을 기억하는 함수입니다. 즉, 클로저는 함수가 실행될 때, 그 함수가 정의된 환경에서의 변수들을 "포획"하고 이를 기억하는 특성을 가집니다. 이를 통해, 함수가 종료된 후에도 그 함수 내에서 정의된 변수들을 계속 사용할 수 있습니다.

### 예시:
```js
function outer() {
  let count = 0; // outer 함수의 지역 변수

  function inner() {  // inner 함수는 count에 접근할 수 있다
    count++;
    console.log(count);
  }

  return inner;  // inner 함수(클로저)를 반환
}

const counter = outer();  // outer 함수가 실행되고 inner 함수가 반환됨
counter();  // 1
counter();  // 2
counter();  // 3
```
위 예시에서 outer 함수는 inner 함수를 반환합니다. inner 함수는 count 변수를 참조하고 있으며, outer 함수가 끝난 후에도 count에 계속 접근할 수 있습니다. 이는 inner 함수가 클로저이기 때문입니다.

즉, 클로저는 함수가 정의된 환경을 "기억"하여 그 환경에 있는 변수들을 계속 사용할 수 있게 해 줍니다.
