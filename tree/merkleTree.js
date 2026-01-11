class NodeElement {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MerkleTree {
  constructor() {
    this.root = null;
  }

  buildTree(elements) {
    if (elements.length === 0) {
      this.root = null;
      return;
    }

    // Copy the elements to avoid mutating the original array
    let currentLevel = elements.slice();

    // Build the tree by hashing pairs until one root remains
    while (currentLevel.length > 1) {
      let nextLevel = [];
      for (let i = 0; i < currentLevel.length; i += 2) {
        let left = currentLevel[i];
        let right = i + 1 < currentLevel.length ? currentLevel[i + 1] : left;
        nextLevel.push(this._hash(left, right));
      }
      currentLevel = nextLevel;
    }

    // Build the tree structure recursively
    this.root = this._buildRecursive(elements);
  }

  _buildRecursive(elements) {
    if (elements.length === 0) {
      return null;
    }
    if (elements.length === 1) {
      return new NodeElement(elements[0]);
    }
    let nodes = [];
    for (let i = 0; i < elements.length; i += 2) {
      let left = new NodeElement(elements[i]);
      let right =
        i + 1 < elements.length ? new NodeElement(elements[i + 1]) : left;
      let parentValue = this._hash(left.value, right.value);
      let parent = new NodeElement(parentValue);
      parent.left = left;
      parent.right = right;
      nodes.push(parent);
    }
    return this._buildRecursive(nodes.map((node) => node.value));
  }

  _hash(left, right) {
    return `Hash(${left}+${right})`;
  }

  getRoot() {
    return this.root;
  }

  depth(node = this.root) {
    if (node === null) return 0;
    const leftDepth = this.depth(node.left);
    const rightDepth = this.depth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  inorderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage:
const merkleTree = new MerkleTree();
const elements = ["TX1", "TX2", "TX3", "TX4", "TX5", "TX6", "TX7", "TX8"];
merkleTree.buildTree(elements);
console.log("Merkle Tree Root:", merkleTree.getRoot()?.value);
console.log("Merkle Tree Depth:", merkleTree.depth());
console.log("Inorder Traversal:", merkleTree.inorderTraversal());
