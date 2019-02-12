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

class BinarySearchTree {
  constructor() {
    this.root = new BinaryTreeNode();
  }
  add(val) {
    if (!this.root) {
      this.root = new BinaryTreeNode(val);
      return;
    }
    let curNode = this.root;
    let newNode = new BinaryTreeNode(val);

    while (curNode) {
      // check equivalency
      if (curNode.value === newNode.value) {
        console.log('value already in BST')
        return;
      }
      // check newNode greater
      if (val < curNode.value) {
        if (!curNode.left) {
          curNode.left = newNode;
          break;
        } else {
          curNode = curNode.left;
        }
      } else {
        if (!curNode.right) {
          curNode.right = newNode;
          break;
        } else {
          curNode = curNode.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }
    let curNode = this.root;
    while (curNode) {
      if (curNode.value === value) {
        console.log('found ', curNode.value)
        return true;
      }
      if (value < curNode.value) {
        if (curNode.left) {
          curNode = curNode.left;
          continue;
        } else {
          return false;
        }
      }
      if (value > curNode.value) {
        if (curNode.right) {
          curNode = curNode.right;
          continue;
        } else {
          return false;
        }
      }
    }
  }
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
  isBST(node) {
    let min = Number.MIN_SAFE_INTEGER
    let max = Number.MAX_SAFE_INTEGER
    return this.isBSTUtility(node, min, max);
  }
  isBSTUtility(node, min, max) {
    if (node === null) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (this.isBSTUtility(node.left, min, node.value - 1) && this.isBSTUtility(node.right, node.value + 1, max));
  }
}

let b = new BinarySearchTree();

b.add(3);
b.add(4);
b.add(1);

// b.find(3);
// b.inorder(b.root);

console.log(b.isBST(b.root));

// b.root.value = "root";
// b.root.left = new BinaryTreeNode("left");
// b.root.right = new BinaryTreeNode("right");
// b.root.left.left = new BinaryTreeNode("left left");
// b.root.left.right = new BinaryTreeNode("left right");
// b.root.right.left = new BinaryTreeNode("right left");
// b.root.right.right = new BinaryTreeNode("right right");

// b.breadthFirstTraversal(console.log);


// todo:
// #3
// would find midpoint
// separate into two sub arrays
// recur through this and reconstruct tree
