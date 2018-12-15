// Warmup

// Partition an array.
// Negative values left, positive, right

// [2, 3, 5, 6, 1, 0, 3, -3, -4, -1, -6 ]
// [neg --> pos]

// try and beat nlogn time complexity
// try and find pivot closest to 0 or 0 if possible
// for each additional number in array, compare against
// pivot and send either left or right?
// - what if pivot is 

function arrayPartition(arr) {
  let pivot = 0;
  let total = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (num === pivot) {
      // unique case of zero
      // don't need to do anyting - I don't think?
      // unshifts and pushes should surround the 0
    } else if (num < 0) {
      // partition to front
      // arr.unshift --> messes up loop length
    } else {
      // partition to back
      // arr.push
    }
    return arr;
  }
}

function arrayPartition2(arr) {
  // need to figure out have-seen-it-before problem
  // map?? - but is it still partitioning if using another data structure??

  // let pointer1 = // need something to point to next number in array 
  // let pointer2 = 
  // let pivot = 0;

  

}