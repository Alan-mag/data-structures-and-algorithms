class MinHeap {
  constructor() {
    this.data = [];
  }

  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  parentOf(index) {
    return Math.floor((index + 1) / 2) - 1;
  }

  insert(val) {
    this.data.push(val);
    this.heapifyUp(this.data.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      let parent = Math.floor((index + 1) / 2) - 1;

      if (this.data[parent] > this.data[index]) {
        // swap
        let temp = this.data[parent];
        this.data[parent] = this.data[index];
        this.data[index] = temp;
      }
      index = parent;
    }
  }

  pullMin() {
    let min = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    while (true) {
      let child = (index + 1) * 2;
      let sibling = child - 1;
      let swap = null;

      // if current is greater than child
      if(this.data[index] > this.data[child]) {
        swap = child;
      }

      if (this.data[index] > this.data[sibling] && (this.data[child] === null || (this.data[child] !== null  && this.data[sibling] < this.data[child]))) {
        swap = sibling;
      }

      if (swap = null) {
        break;
      }

      let temp = this.data[swap];
      this.data[swap] = this.data[index];
      this.data[index] = temp;

      index = swap;
    }
  }
}




let heap = new MinHeap();

heap.insert(5);
heap.insert(4);
heap.insert(8);
heap.insert(18);
heap.insert(6);
heap.insert(1);
heap.insert(14);
heap.insert(2);
heap.insert(7);

console.log(heap);
// not working!!!
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
console.log(heap.pullMin());
