##  How does async/await work?
async/await는 JavaScript에서 비동기 코드를 더 쉽게 작성할 수 있도록 도와주는 기능입니다. 기존의 Promise 체인을 사용하는 방법보다 코드가 더 직관적이고 읽기 쉬워집니다.

### 1. async와 await의 기본 개념
- async 키워드를 함수 앞에 붙이면 해당 함수는 항상 Promise를 반환합니다.
- await 키워드는 Promise가 완료될 때까지 기다린 후 결과 값을 반환합니다.

### 2. 사용 예제
```js
async function fetchData() {
  return "Hello, Async!";
}

fetchData().then(console.log); // "Hello, Async!" 출력

```
위 코드에서 async function을 사용했기 때문에 fetchData()는 Promise를 반환합니다.

### 3. await를 사용한 비동기 처리
```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
  console.log("데이터를 가져오는 중...");
  await delay(2000); // 2초 동안 기다림
  console.log("데이터를 가져왔습니다!");
}

getData();

```
실행 흐름
1. "데이터를 가져오는 중..." 출력
2. await delay(2000);에서 2초 동안 기다림
3. "데이터를 가져왔습니다!" 출력
await를 사용하면 마치 동기 코드처럼 비동기 처리를 쉽게 작성할 수 있습니다.

### 4. async/await와 try/catch를 이용한 에러 처리
```js
async function fetchUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

fetchUserData();

```
- try 블록 안에서 await를 사용해 데이터를 가져옵니다.
-  catch 블록에서 네트워크 오류나 API 호출 실패 같은 에러를 처리합니다.
