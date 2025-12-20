let grath = {
  1: [2, 3],
  2: [4, 5],
  3: [6, 7],
  4: [2, 8],
  5: [7],
  6: [1, 7, 8],
  7: [22, 33],
  8: [1, 3],
};

// Exemplo of stack: array [1, 2, 3] -> push(4) -> [1, 2, 3, 4] -> pop() -> 4, [1, 2, 3]
// Depth-First Search (DFS) for Graph
// Stack: LIFO (Last In First Out)
// O(n) time complexity
// Use stack to keep track of nodes to visit
function dfsGraph(node, startNode) {
  let visited = {};
  let stack = [startNode];
  while (stack.length > 0) {
    let currentNode = stack.pop();
    if (!visited[currentNode]) {
      console.log(currentNode);
      visited[currentNode] = true;
      let neighbors = node[currentNode];
      console.log("Neighbors of", currentNode, ":", neighbors);
      if (!neighbors) continue;
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
  console.log("Visited Nodes in Graph:", Object.keys(visited));
}

console.log("DFS Graph Traversal:");
dfsGraph(grath, 7);
