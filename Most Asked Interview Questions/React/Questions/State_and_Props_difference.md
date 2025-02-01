# Difference between React state and props?
React에서 state와 props는 두 가지 중요한 개념으로, 컴포넌트 간 데이터 전달 및 관리에 사용됩니다. 이 두 개념은 비슷한 점도 있지만, 각기 다른 역할과 용도가 있습니다. 그 차이를 아래와 같이 정리할 수 있습니다.

## 1️⃣ Props (속성)
Props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 읽기 전용 데이터입니다. 부모 컴포넌트는 자식 컴포넌트를 렌더링할 때, 해당 컴포넌트에 필요한 값을 전달할 수 있습니다. 자식 컴포넌트는 이 값을 읽기만 할 수 있으며, 수정할 수 없습니다.

### 🔹 특징:
- 읽기 전용: 자식 컴포넌트는 props 값을 변경할 수 없습니다.
- 상위 컴포넌트에서 하위 컴포넌트로 전달: 데이터를 부모에서 자식으로 전달합니다.
- 불변성: props는 자식 컴포넌트에서 변경할 수 없으며, 부모 컴포넌트가 관리합니다.
-
### 🔹 예시:
```jsx
// 부모 컴포넌트
function Parent() {
  return <Child name="Alice" />;
}

// 자식 컴포넌트
function Child(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
위 예시에서, 부모 컴포넌트 Parent는 name이라는 props를 자식 컴포넌트 Child에 전달하고 있습니다. 자식은 이를 받아서 렌더링하지만, props 값은 변경할 수 없습니다.

## 2️⃣ State (상태)
State는 컴포넌트 내부에서 관리하는 동적 데이터로, 사용자 상호작용이나 다른 이벤트에 의해 변경될 수 있습니다. 컴포넌트는 자신의 상태(state)를 수정할 수 있으며, 상태가 변경되면 해당 컴포넌트가 다시 렌더링됩니다.

### 🔹 특징:
- 읽기/쓰기 가능: 컴포넌트 내부에서 상태를 읽고 변경할 수 있습니다.
- 동적 데이터: 주로 사용자 입력, 네트워크 요청, 시간 등의 변화에 의해 바뀌는 데이터입니다.
- 변경 시 리렌더링: 상태가 변경되면, 그 컴포넌트가 다시 렌더링됩니다.

### 🔹 예시:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
위 예시에서, Counter 컴포넌트는 count라는 상태를 관리하며, 버튼을 클릭할 때마다 count 값이 1씩 증가합니다. 상태가 변경되면 컴포넌트는 다시 렌더링됩니다.

### 3️⃣ 주요 차이점 요약

![image](https://github.com/user-attachments/assets/74e19cac-0405-4246-a487-b1d99cdb3229)


### 4️⃣ 결론
- Props는 컴포넌트 간 데이터 전달을 위해 사용되며, 자식 컴포넌트는 이를 읽기만 할 수 있습니다.
- State는 컴포넌트의 내부 데이터로, 자기 자신의 상태를 관리하고, 상태 변경 시 리렌더링됩니다.
