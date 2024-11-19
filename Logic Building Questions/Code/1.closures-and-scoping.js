let x = 5;
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();
