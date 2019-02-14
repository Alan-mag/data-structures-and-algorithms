'use strict';

/*******  REVERSE ARRAY   */
Array.prototype.myReverse = function() {
    let rev = [];
    for (let i = this.length - 1; i >= 0; i--) {
      rev.push(this[i])
    }
    return rev;
}

function revArrayMap(arr) {
  return arr.map((ele, i) => {
    return arr[arr.length - 1 - i];
  })
}

describe('Testing reverse array methods', () => {
  test('It should return original array reversed (prototype method)', () => {
    expect([1, 2, 3].myReverse()).toStrictEqual([3, 2, 1]);
  });

  test('It should return original array reversed (map method)', () => {
    expect(revArrayMap([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });
});

/*******  REMOVE DUPLICATES   */
function removeDups(arr) {
  let uniqueArr = [];
  arr.forEach((num) => {
    if (!uniqueArr.hasValue(num)) {
      uniqueArr.push(num);
    }
  })
  return uniqueArr;
}

Array.prototype.hasValue = function(ele) {
  let isInArray = false;
  this.forEach((val) => {
    if (ele === val) {
      isInArray = true;
    }
  })
  return isInArray;
}

function removeDupsSet(arr) {
  return Array.from(new Set(arr));
}

describe('Testing delete duplicate array methods', () => {
  test('It should return array with duplicates removed (method one)', () => {
    expect(removeDups([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('It should return array with duplicates removed (method three)', () => {
    expect(removeDupsSet([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});

