'use strict';

const fs = require("fs");
let dict = fs.readFileSync("./words.txt").toString('utf-8');
let words = dict.split("\n");

class Node {
  constructor(val, nxt = null) {
    this.value = val;
    this.next = nxt;
  }
}

class LinkedList {
  constuctor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    let nn = new Node(val);
    nn.next = this.head;
    this.head = nn;
    if (this.head.next == null) {
      this.tail = this.head;
    }
  }

  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }
}

class HashList {
  constructor(size) {
    this.bucketSize = size;
    this.buckets = [];
    for (let i = 0; i < size; i++) {
      this.buckets.push(new LinkedList())
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

let h = new HashList(25);

console.time("set");
for (let word of words) {
  h.set(word, word.length)
}
console.timeEnd("set");

console.time("set");
for (let word of words) {
  h.get(word);
}
console.timeEnd("set");
