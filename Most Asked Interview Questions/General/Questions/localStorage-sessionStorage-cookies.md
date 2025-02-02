# What is localStorage, sessionStorage, and cookies?
웹 개발에서 데이터를 저장하는 방법으로 localStorage, sessionStorage, 그리고 쿠키가 있습니다. 각각의 차이점을 알아봅시다.

### 1. localStorage (로컬 스토리지)
- 브라우저에 데이터를 영구적으로 저장하는 공간입니다.
- 브라우저를 닫아도 데이터가 유지됩니다.
- window.localStorage를 사용하여 데이터를 저장하고 가져올 수 있습니다.

예제:
```js
localStorage.setItem("username", "Otabek");
console.log(localStorage.getItem("username")); // "Otabek"
```
### 2. sessionStorage (세션 스토리지)
- 데이터를 일시적으로 저장하는 공간입니다.
- 브라우저를 닫으면 데이터가 사라집니다.
- window.sessionStorage를 사용하여 데이터를 저장하고 가져올 수 있습니다.

예제:
```js
sessionStorage.setItem("sessionData", "Hello");
console.log(sessionStorage.getItem("sessionData")); // "Hello"
```

### 3. Cookies (쿠키)
- 작은 데이터를 클라이언트에 저장하며, 서버와 자동으로 전송될 수 있습니다.
- 주로 로그인 정보나 사용자 설정을 저장하는 데 사용됩니다.
- 만료 기간을 설정할 수 있습니다.

예제 (JavaScript에서 쿠키 설정)
- 작은 데이터를 클라이언트에 저장하며, 서버와 자동으로 전송될 수 있습니다.
- 주로 로그인 정보나 사용자 설정을 저장하는 데 사용됩니다.
- 만료 기간을 설정할 수 있습니다.
- 예제 (JavaScript에서 쿠키 설정)
```js
document.cookie = "user=Otabek; expires=Fri, 31 Dec 2025 23:59:59 GMT";
console.log(document.cookie); // "user=Otabek"
```
### 차이점 정리
![image](https://github.com/user-attachments/assets/bf1148d1-764c-45de-a4da-21ee320cef88)
👉 localStorage는 장기 저장용, sessionStorage는 일시 저장용, 쿠키는 서버와 데이터를 주고받아야 할 때 사용됩니다.
