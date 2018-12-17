'use strict';

const {Node, LinkedList, Queue, Stack, BinaryTreeNode, BinaryTree,} = require('../day-05/ds');

let prices = [100, 80, 60, 70, 60, 75, 85];


function findStockSpan(prices, day) {
  let spanArr = [];
  let spanStreak = new Stack(new LinkedList);
  spanStreak.push(1);

  spanArr[0] = 1;
  
  for (let i = 1; i < day; i++) {
    while (!spanStreak.isEmpty() && prices[spanStreak.peek().value] <= prices[i]) {
      spanStreak.pop();
    }
    spanArr[i] = spanStreak.isEmpty() ? i : (i - spanStreak.peek().value);

    spanStreak.push(i)
  }
  return spanArr;
};

let stockSpanArray = findStockSpan(prices, 7);

console.log(stockSpanArray)
