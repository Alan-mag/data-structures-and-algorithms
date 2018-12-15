'use strict';

let Queue = require('../day-03/queue.test');
let { LinkedList, Node } = require('../day-02/linkedlist.test');

class BinaryTreeNode {
  constructor(val = null) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  add(val) {
    if (val < this.value && this.left) {
      this.add(val);
    } else if (val < this.value) {
      this.left = new BinaryTreeNode(val);
    } else if (val > this.value && this.right) {
      this.add(val);
    } else if (val > this.value) {
      this.right = new BinaryTreeNode(val);;
    }
  }
  // depth first is clean recursively --- that's why depth first is in binary tree node class
  // and breadth first is in actual binary tree class
  postOrder(cb) {
    if (this.left) {
      this.left.postOrder(cb);
    }
    if (this.right) {
      this.right.postOrder(cb);
    }
    cb(this.value);
  }

  preOrder(cb) {
    cb(this.value);
    if (this.left) {
      this.left.preOrder(cb);
    }
    if (this.right) {
      this.right.preOrder(cb);
    }
  }

  inOrder(cb) {
    if (this.left) {
      this.left.inOrder(cb);
    }
    cb(this.value);
    if (this.right) {
      this.right.inOrder(cb);
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = new BinaryTreeNode();
  }

  breadthFirst(cb) {
    let q = new Queue(new LinkedList());
    q.enqueue(this.root);
    while (!q.isEmpty()) {
      let n = q.dequeue();
      cb(n.value);
      if (n.left) q.enqueue(n.left)
      if (n.right) q.enqueue(n.right)
    }
  }

}

let b = new BinaryTree();

b.root.value = 1;

b.root.left = new BinaryTreeNode(99);
b.root.left.left = new BinaryTreeNode(1);
b.root.left.right = new BinaryTreeNode(1);

b.root.right = new BinaryTreeNode(7);
b.root.right.left = new BinaryTreeNode(11);
b.root.right.right = new BinaryTreeNode(1000000);

console.log('Breadth-first')
b.breadthFirst(console.log);
console.log(b)

// b.root.traverse(console.log);


//console.log(b);
