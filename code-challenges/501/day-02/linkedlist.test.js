'use strict';

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    let nn = new Node(val);
    nn.next = this.head;
    this.head = nn;
  }

  traverse(callback) {
    let current = this.head;
    while(current) {
      callback(current.data);
      current = current.next;
    }
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {        // for review
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  reverseList() {
    let node = this;
    let previous = null;

    while (node) {
      let save = node.next;
      node.next = previous;
      previous = node;
      node = save;
    }
    return previous;
  }

  getFromLast(k) {
    let hare = this.head;
    let counter = 0;
    while(hare) {
      if (counter === k) {
        let tort = this.head
      }
      if (tort) {
        tort = tort.next;
      }
      hare = hare.next;
      counter++;
    }

    return tort;
  }

  // I will iterate through linkedList, 
  // if value is even, add to list, continue iterating at
  // pointer which should be at latest node in iteration

  evenOddPartition() {
    let curNode = this.head;
    while (curNode.next) {
      let nodeToCheck = curNode.next;
      let nodeToConnect = curNode.next.next;
      if (nodeToCheck.data % 2 === 0) {    // test if even
        curNode.next = nodeToConnect;
        nodeToCheck.next = this.head;
        this.head = nodeToCheck;
      }

      curNode = curNode.next; // this is circular
    }
    return this;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}



let l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.add(7);
l.add(8);
l.add(9);

console.log(l.traverse((v) => {
  console.log(v)
}))

let partition = l.evenOddPartition();

console.log(partition.traverse((v) => {
  console.log(v)
}))