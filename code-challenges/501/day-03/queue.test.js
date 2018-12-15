'use strict';

let {LinkedList, Node} = require('../day-02/linkedlist.test');

// enquee at tail
// deque at head

class Queue {
  constructor(linked) {
    this.list = linked;
  }

  enqueue(data) {
    let nn = new Node(data);
    this.list.add(nn);
    this.list.tail.next = nn;
    this.list.tail = nn;
  }

  dequeue() {
    let out = this.list.head;
    this.list.head = out.next;
    return out.value;
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}

module.exports = Queue;

// example:
let q = new Queue(new LinkedList());
q.enqueue(2);
console.log(q)
// console.log(q.enqueue(3));
// console.log(q.dequeue());

// output should be linked list w/node data value at head of '2'