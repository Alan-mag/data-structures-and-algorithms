'use strict';

// method one
function reverseArrayOne(arr) { // O(n)
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}

// method two
function reverseArrayTwo(arr) { // O(n^2)
  let rev = [];
  arr.forEach(num => {
    rev.unshift(num);
  });
  return rev; 
}

// method three
function reverseArrayThree(arr) {
  return arr.myReverse();
}

Array.prototype.myReverse  = function() {
  let rev = [];
  for (let i = this.length - 1; i >= 0; i--) {
    rev.push(this[i]);
  }
  return rev;
}

// method four
function reverseArrayFour(arr) {
  return arr.map((ele, i) => {
    return arr[arr.length - 1 - i];
  })
}

describe('Testing reverse array methods', () => {
  test('It should return original array reversed (method one)', () => {
    expect(reverseArrayOne([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });

  test('It should return original array reversed (method two)', () => {
    expect(reverseArrayOne([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
  });

  test('It should return original array reversed (method three)', () => {
    expect(reverseArrayThree([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  });

  test('It should return original array reversed (method four)', () => {
    expect(reverseArrayFour([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  });
});