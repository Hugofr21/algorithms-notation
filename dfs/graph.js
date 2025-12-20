let tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

function dfs(node) {
  if (node === null) {
    return;
  }
  console.log(node.value);
  dfs(node.left);
  dfs(node.right);
}

console.log("DFS Traversal:");
dfs(tree);

function dfsSum(node) {
  if (node === null) {
    return 0;
  }
  let viseted = {};
  viseted[node.value] = true;
  return node.value + dfsSum(node.left) + dfsSum(node.right);
}

console.log("DFS Sum:", dfsSum(tree));

function findNode(node, value) {
  if (node === null) return null;
  if (node.value === value) return node;
  return findNode(node.left, value) || findNode(node.right, value);
}

function dfsIterative(startNode) {
  let visited = {}; // To keep track of visited nodes
  let stack = [startNode]; // Stack for DFS

  while (stack.length > 0) {
    let node = stack.pop(); // Get the last node added to the stack
    if (!visited[node.value]) {
      console.log(node.value);
      visited[node.value] = true; // Mark node as visited
      if (node.right) stack.push(node.right); // Push right child first
      if (node.left) stack.push(node.left); // Push left child second
    }
  }
  console.log("Visited Nodes:", Object.keys(visited));
}

console.log("Find Node with value 4:", findNode(tree, 4));

console.log("DFS Viseted Traversal:");
dfsIterative(findNode(tree, 4));
