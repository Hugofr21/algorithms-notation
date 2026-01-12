function fatherTarget(arr, target) {
  let path = [];
  let found = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === target) {
        let parentIndex = Math.floor((j - 1) / 2);
        console.log("Target found at index:", j);
        console.log("Parent Index:", parentIndex);
        if (parentIndex >= 0 && parentIndex < arr.length) {
          path.push(arr[parentIndex]);
        }
        return path;
      }
    }
  }
  return path;
}

function siblingTarget(arr, target) {
  let sibling = null;
  function findSibling(index) {
    if (index >= arr.length || arr[index] === undefined) return;
    if (arr[index] === target) {
      if (index % 2 === 1) {
        sibling = arr[index + 1];
      } else {
        sibling = arr[index - 1];
      }
      return;
    }
    findSibling(2 * index + 1);
    findSibling(2 * index + 2);
  }
  findSibling(0);
  return sibling;
}

function childTarget(arr, target) {
  let child = null;
  function findChild(index) {
    if (index >= arr.length || arr[index] === undefined) return;
    if (arr[index] === target) {
      // Check for children
      const leftChild = arr[2 * index + 1];
      const rightChild = arr[2 * index + 2];
      if (leftChild !== undefined) child = leftChild;
      if (rightChild !== undefined) child = rightChild;
      return;
    }
    findChild(2 * index + 1);
    findChild(2 * index + 2);
  }
  findChild(0);
  return child;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("Find path in family tree");
let father = fatherTarget(array, 13);
console.log("Path to target:", father);
let sibling = siblingTarget(array, 5);
console.log("Sibling of target:", sibling);
let child = childTarget(array, 2);
console.log("Child of target:", child);
