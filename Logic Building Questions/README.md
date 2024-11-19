# JavaScript Logic Building QUestions

1.What would be output of this code?

```javascript
let x = 5;
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();
```
