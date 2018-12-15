function quickSort(pivot, ...arr) { // rest operator
  // base case
  if (!pivot) {
    return [];
  }

  let less = arr.filter((val) => {
    return val <= pivot
  })
  let more = arr.filter((val) => {
    return val > pivot;
  })
  return quickSort(...less).concat(pivot).concat(quickSort(...more)); // spread operator (same ... diff names depending where it is)
}

console.log(quickSort(...[5, 4, 3, 7, 6, 5, 9, 8, 7, 23, 34, 45, 54 ,43]));

// O(n) space
// 