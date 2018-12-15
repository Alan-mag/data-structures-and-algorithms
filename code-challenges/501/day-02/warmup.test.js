function factorial(n) {
  if (n < 2) {
    return 1;
  };
  return (n * factorial(n-1)); 
}

function memoize(fn) {
  let cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
    let result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

factorial = memoize(factorial)

describe('Testing factorial methods', () => {
  test('Should return factorial of given input.', () => {
    expect(factorial(13)).toStrictEqual(6227020800);
  });

  test('Should return factorial of given input - memoized.', () => {
    expect(factorial(13)).toStrictEqual(6227020800);
  });
});