'use strict';
let LinkedList = require('../day-02/linkedlist.test');

class Stack {
  constructor(store) {
    this.list = store;
  }

  push(val) {
    this.list.add(val);
  }

  pop() {
    let node = this.list.head;
    this.list.head = node.next;
    return node;
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}

module.exports = Stack;

// let s = new Stack(new LinkedList);

// s.push(42);
// s.push(99);
// s.push(0);

// console.log(s)
