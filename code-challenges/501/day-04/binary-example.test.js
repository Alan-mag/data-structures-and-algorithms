'use strict';
const util = require('util');

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  traverse(cb) {
    let current = this.head;
    while (current) {
      cb(current);
      current = current.next;
    }
  }
}

class Queue {
  constructor(line) {
    this.list = line;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.list.head) {
      this.list.head = node;
      this.list.tail = node;
    } else {
      this.list.tail.next = node;
      this.list.tail = node;
    }
  }

  dequeue() {
    let remove = this.list.head;
    this.list.head = remove.next;
    return remove.value;
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}


class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
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
  postOrderTraverse(cb) {
    if (this.left) this.left.postOrderTraverse(cb);
    if (this.right) this.right.postOrderTraverse(cb);
    cb(this.value);
  }
  preOrderTraverse(cb) {
    cb(this.value);
    if (this.left) this.left.preOrderTraverse(cb);
    if (this.right) this.right.preOrderTraverse(cb);
  }
  inOrderTraverse(cb) {
    if (this.left) this.left.inOrderTraverse(cb);
    cb(this.value);
    if (this.right) this.right.inOrderTraverse(cb);
  }

}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(val) {
    if (this.root) this.root.add(val);
    else this.root = new BinaryTree(val);
  }
  breadthFirstTraversal(cb) {
    let q = new Queue( new LinkedList);
    q.enqueue(this.root);
    while(!q.isEmpty()) {
      let n = q.dequeue();
      cb(n.value);
      if (n.left) q.enqueue(n.left);
      if (n.right) q.enqueue(n.right);
    }
  }
}

let b = new BinaryTree();

// b.root.value = new BinaryTreeNode(3);

b.add(2);
b.add(5);
b.add(7);

console.log(JSON.stringify(b));
// console.log(util.inspect(b, false, null, true /* enable colors */))

// b.root.value = "root";
// b.root.left = new BinaryTreeNode("left");
// b.root.right = new BinaryTreeNode("right");
// b.root.left.left = new BinaryTreeNode("left left");
// b.root.left.right = new BinaryTreeNode("left right");
// b.root.right.left = new BinaryTreeNode("right left");
// b.root.right.right = new BinaryTreeNode("right right");

b.breadthFirstTraversal(console.log);