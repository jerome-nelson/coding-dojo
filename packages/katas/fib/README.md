## Fibonacci 

This is a function that returns fibonacci numbers 

```js
function fib(n) {
  if (n < 2){
    return n
  }
  return fib(n - 1) + fib (n - 2)
}

fib(10)
```

## Question
1. What would the first call on the call stack be for this function?