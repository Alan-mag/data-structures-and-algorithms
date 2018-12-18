'use strict';

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

  removeFirst() {
    if (!this.head) {
      return;
    }
    let removed = this.head;
    this.head = this.head.next;
    return removed;
  }

  traverse(proc) {
    let current = this.head;
    while (current) {
      proc(current.value);
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
    return this.list.head;
  }

  isEmpty() {
    return !this.list.head;
  }

  traverse(cb) {
    this.list.traverse(cb);
  }
}

class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
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
    this.root = new BinaryTreeNode();
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

module.exports = {
  Node,
  LinkedList,
  Queue,
  Stack,
  BinaryTreeNode,
  BinaryTree,
};