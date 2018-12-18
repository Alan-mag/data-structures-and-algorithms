'use strict';

const {Node, LinkedList, Queue, Stack} = require('../day-05/ds');


class BinaryTreeNode {
  constructor(val = null) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  // add(val, node) {
  //   if(val < node.value && !node.left) {
  //     this.left = new BinaryTreeNode(val);
  //   } else if(val < node.value && (node.left)) {
  //     this.add(val, node.left);
  //   } else if(val > node.value && !node.right) {
  //     this.right = new BinaryTreeNode(val);
  //   } else if(val > node.value && (node.right)) {
  //     this.add(val, node.right);
  //   }
  // }

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

  add(val, node) {
    if (!node) {
     node = this.root;
    }
    if(val < node.value && (!node.left)) {
      node.left = new BinaryTreeNode(val);
    } else if(val < node.value && (node.left)) { // move left and recurse
      this.add(val, node.left);
    } else if(val > node.value && (!node.right)) { // for value to insert right
      node.right = new BinaryTreeNode(val);
    } else if(val > node.value && (node.right)) { // move right and recurse
      this.add(val, node.right);
    }
  }

  findValue(val, node, found) {
    if (!this.root) {
      found = false;
    }
    node = node ? node : this.root;

    if (node.value === val) {
      found = true
    }

    if (val > node.value && !node.right) {
      return found = false
    }

    if (val < node.value && !node.left) {
      return found = false
    }


    if (val < node.value && node.left) {
      return this.findValue(val, node.left, found);
    } else if (val > node.value && node.right) {
      return this.findValue(val, node.right, found);
    } 
    return found;
  }

  isBST(node, min = null, max = null) {
    if (!node) {
      return true;
    }
    if(max !== null & node.value >= max) {
      return false;
    }
    if(max !== null & node.value <= min) {
      return false;
    }
    let left = this.isBST(node.left, min, node.value);
    let right = this.isBST(node.right, node.value, max);
  
    return left && right;
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

b.root.value = 4;
b.add(6);
b.add(2);
b.add(3);
b.add(5);
b.add(1);
b.add(7);

console.log(b.breadthFirst(console.log))

console.log(b.findValue(7))

//console.log(b.root.left)

console.log(b.isBST(b.root)); // maybe redundant to have method on class and take root node?
