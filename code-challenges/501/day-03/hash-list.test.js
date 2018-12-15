'use strict';

const fs = require('fs');

let { LinkedList, Node } = require('../day-02/linkedlist.test');

const dict = fs.readFileSync('/usr/share/dict/words', 'utf8');

//console.log(dict)
class HashList {
  constructor(size) {
    this.bucketSize = size;
    this.buckets = [];
    for (let i=0; i < this.bucketSize; i++) {
      this.buckets.push(new LinkedList());
    }
  }

  findHash(key) {
    let hash = 0; 
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash;
  }

  getBucket(key) {
    let index = this.findHash(key) % this.bucketSize; 
    return this.buckets[index];
  }

  set(key, val) {
    let obj = { key, val }; // We store the key and val so we can find it later. 
    
    // Look to see if the value is already stored, 
    this.getBucket(key).traverse( o => { 
      if (o.key == key) {
        o.val = obj.val;  // update the value with the what is being set
        obj = null;
      }
    });
    if (obj) {
      this.getBucket(key).add(obj);
    }
  }

  get(key) {
    let obj = {val: null};
    this.getBucket(key).traverse(o => { if (o.key == key) obj = o; }); // Is this a bottleneck?
    return obj.val; 
  }

}

let h = new HashList(150); 
// h.set('Hello', 'world!')

console.time("set");

for (let w of dict) {
  let count = h.get(w);
  if (count) {
    h.set(w, ++count);
  }
  else {
    h.set(w, 1);
  }
}
console.timeEnd("set");

console.log(h)

console.log(h.get(' '));

// complete implementation 
// check to do performance tweaks
// visit triple sum problem
// make better than n^2 log n
