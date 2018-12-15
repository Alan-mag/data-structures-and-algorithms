
console.time("set");
let fibonacci = function(n) {
  let memo = [];
  return fib(n, memo);
}

let fib = function(n, memo) {
  if (n < 2) { return n; }
  if (!memo[n]) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  return memo[n];
}

console.timeEnd("set");

console.log(fibonacci(21));