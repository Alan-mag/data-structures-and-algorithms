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
    while (curNode) {
      let saved = curNode.next;
      if (curNode.data % 2 === 0) {    // test if even
        curNode.next = this.head;
        this.head = curNode;
      }
      curNode = saved; // this is circular
    }
    return this;
  }

  // figure out jest test --> accumulator & array
  // apply other algorithm to log out linkedlist vals

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

console.log(l.traverse((v) => {
  console.log(v)
}))

let partition = l.evenOddPartition();

console.log(partition.traverse((v) => {
  console.log(v)
}))


// console.log(l.evenOddPartition());
// console.log(JSON.stringify(l.evenOddPartition()));

// let part = l.evenOddPartition();
// part.traverse((v) => {
//   console.log(v)
// })





/// examples in class

// class Node2 {
//   constructor(data, next) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList2 {
//   constructor() {
//     this.head = null;
//   }

//   add(val) {
//     let nn = new Node2(val);
//     nn.next = this.head;
//     this.head = nn;
//   }

//   traverse(callback) {
//     let current = this.head;
//     while(current) {
//       callback(current.data);
//       current = current.next;
//     }
//   }

//   remove(val) {
//     if (!this.head) {
//       return;
//     }
//     let current = this.head;
//     if (val === current.head) {
//       this.head = current.next;
//       if (!this.head) {
//         return;
//       }
//     }
//     current = this.head;
//     while(current.next.next !== null) {
//       if (val === current.next.val) {
//         current.next = current.next.next;
//       }
//       current = current.next;
//     }
//   }
// }