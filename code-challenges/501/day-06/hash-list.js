'use strict';

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

let h = new HashList(10); 
h.set('Hello', 'world!')

console.time("set");

for (let c of "Welcome to the jungle, we've got fun and games.") {
  let count = h.get(c);
  if (count) {
    h.set(c, ++count);
  }
  else {
    h.set(c, 1);
  }
}
console.timeEnd("set");

console.log(h.get(' '));
console.log(h.get('e'));