// Tree Heap

// 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18 - 20 - 22
// parent = (i-1)/2
// left = 2i + 1
// right = 2i + 2

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MaxHeap {
  constructor() {
    this.root = null;
    this.nodes = [];
  }
  insert(value) {
    const newNode = new TreeNode(value);
    this.nodes.push(newNode);
    if (this.nodes.length === 1) {
      this.root = newNode;
    } else {
      const parentIndex = Math.floor((this.nodes.length - 2) / 2);
      const parentNode = this.nodes[parentIndex];

      if (parentNode.value < newNode.value) {
        // Swap values
        const temp = parentNode.value;
        parentNode.value = newNode.value;
        newNode.value = temp;
      }
    }
  }

  inorderTraversal(node) {
    if (node) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  printHeap() {
    console.log(this.nodes.map((node) => node.value));
  }
}

const heap = new MaxHeap();
const values = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
values.forEach((value) => heap.insert(value));
console.log("Inorder Traversal of Heap:");
heap.inorderTraversal(heap.root);
console.log("Heap as Array:");
heap.printHeap();

// Output:
// Inorder Traversal of Heap:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// 22
// Heap as Array:
// [ 22, 20, 21, 16, 18, 12, 14, 8, 10, 4, 2 ]
