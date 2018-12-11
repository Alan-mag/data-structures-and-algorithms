// method one
function removeDuplicatessOne(arr) {
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

// method 2
function removeDuplicatessTwo(arr) {
  let uniqueArr = [];
  arr.forEach((num) => {
    if (!uniqueArr.hasValueReduce(num)) {
      uniqueArr.push(num);
    }
  })
  return uniqueArr;
}


Array.prototype.hasValueReduce = function(ele) {
  return this.reduce((acc, val) => {
    if (ele === val) {
      acc = true;
    }
    return acc;
  }, false)
}

// method three
function removeDuplicatessThree(arr) {
  let map = {};

  arr.forEach((num) => {
    if(!map[num]) {
      map[num] = true;
    }
  })
  return Object.keys(map).map(val =>  Number(val))
}

Array.prototype.hasValueMap = function(ele) {
  if (map[ele]) {
    return true;
  }
  map[ele] = true;
  return false;
}

function removeDupsFour(arr) {
  return Array.from(new Set(arr));
}


describe('Testing delete duplicate array methods', () => {
  test('It should return array with duplicates removed (method one)', () => {
    expect(removeDuplicatessOne([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('It should return array with duplicates removed (method two)', () => {
    expect(removeDuplicatessTwo([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('It should return array with duplicates removed (method two)', () => {
    expect(removeDuplicatessThree([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('It should return array with duplicates removed (method three)', () => {
    expect(removeDupsFour([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});