function insertHeap(heap, value) {
  heap.push(value);
  let index = heap.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);
  console.log("Inserting value:", value);
  console.log("Current heap:", heap);
  console.log("Index:", index, "Parent Index:", parentIndex);

  while (index > 0 && heap[index] > heap[parentIndex]) {
    [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}
function buildMaxHeap(array) {
  let heap = [];
  for (let value of array) {
    insertHeap(heap, value);
  }

  return heap;
}
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const maxHeap = buildMaxHeap(array);
console.log("Max Heap:", maxHeap);
