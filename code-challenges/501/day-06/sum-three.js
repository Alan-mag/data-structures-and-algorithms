'use strict';

// Sum 3: Given an array of distinct integers, find a triplet (set of 3 numbers) that sums to zero.
function findSumZero(arr) {
  let sumMap = {};
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 2; j++) {
      let localSum = arr[i] + arr[j];
      sumMap[localSum] = [i, j];
    }
  }

  // console.log(sumMap);
  
  arr.forEach((ele, index) => {
    let checknumber = ele * -1
    if(sumMap[checknumber] && sumMap[checknumber].indexOf(ele) === -1) {
      return console.log('found match', sumMap[checknumber].map(ele => arr[ele]), ele)
    }
  })
};

console.log(findSumZero([0, 1, 2, 3, 4, -1, -2, -3, -3, -2, -1]))

// try adding hashtable implementation