## What is event delegation?
**이벤트 위임(Event Delegation)**은 자식 요소들마다 개별적으로 이벤트 리스너를 추가하는 대신, 부모 요소에 하나의 이벤트 리스너를 설정하여 하위 요소들의 이벤트를 처리하는 기법입니다.

### 🔹 어떻게 동작하나요?
이벤트가 발생하면 버블링(Bubbling) 을 통해 해당 이벤트가 부모 요소까지 전달됩니다. 이를 활용하여 부모 요소에서 이벤트를 감지하고, 이벤트가 발생한 타겟(target)을 확인하여 특정 요소에 대한 처리를 수행할 수 있습니다.

### 🔹 장점
✅ 성능 최적화: 많은 자식 요소에 개별적으로 이벤트 리스너를 추가하는 것보다 효율적입니다.
 동적 요소 처리 가능: 동적으로 추가된 요소들도 별도의 이벤트 리스너를 설정할 필요 없이 자동으로 이벤트를 처리할 수 있습니다.

### 🔹 예제 코드 (JavaScript)
```js
document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches("button")) {
    console.log("버튼 클릭됨:", event.target.textContent);
  }
});

```
위 코드는 #parent 요소에서 클릭 이벤트를 감지하고, 클릭된 요소가 <button> 태그인지 확인하여 처리하는 방식입니다.

이렇게 하면 버튼이 동적으로 추가되더라도 따로 이벤트 리스너를 추가할 필요 없이 동작합니다. 🚀
