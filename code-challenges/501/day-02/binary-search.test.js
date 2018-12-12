let arr = [3,7,9,12,14,15,17,20,24,30];

function binarySearch(target, arr) {
  let count = 1;
  let upperBound = arr[0];
  let lowerBound = arr[arr.length - 1];
  let mid = calcMid(upperBound, lowerBound);

  if(arr[mid] === target) {
    return count;
  }
  count++;
  if (arr[mid] < target) {
    lowerBound = mid;
    mid = calcMid(upperBound, lowerBound);
  } else {
    upperBound = mid;
    mid = calcMid(upperBound, lowerBound);
  }

  arr = arr.splice(lowerBound, upperBound);
  binarySearch(target, arr); // finish
}

function calcMid(up, low) {
  return ((up + low) / 2);
}

test('Should return number of steps to get to value in binary search.', () => {
  expect(binarySearch(10, arr)).toStrictEqual(3); // not sure, check
});