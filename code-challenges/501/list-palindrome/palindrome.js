const {Node, LinkedList, Queue, Stack, BinaryTreeNode, BinaryTree,} = require('../day-05/ds');

let word = new LinkedList;
word.add("r");
word.add("a");
word.add("c");
word.add("e");
word.add("c");
word.add("a");
word.add("r");




function findPalindrome(list) {
  let stack = new Stack(new LinkedList);
  let pal = true;
  let curNode = list.head;
  while(curNode) {
    stack.push(curNode.value);
    curNode = curNode.next;
  }
  while(list.head) {
    if (list.removeFirst().value !== stack.pop().value) {
      pal = false;
    }
  }
  return pal;
}

let isPalindrome = findPalindrome(word);

console.log(isPalindrome);
