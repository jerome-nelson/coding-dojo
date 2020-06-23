## Fibonacci 

This is a function that returns fibonacci numbers 

```js
function fib(n) {
  
  // Guard Condition - otherwise stack overflow 
  if (n < 2){
    return n
  }
  
  // Each function call is placed on the call stack
  return fib(n - 1) + fib (n - 2)
}

fib(10)
```

## Question
1. What kind of function is this?
2. What are the drawbacks/benefits of using recursion?
3. What would the first call on the call stack be for this function?