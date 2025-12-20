let grath = {
  1: [2, 9, 11],
  2: [4, 5],
  11: [6, 7],
  3: [6, 7],
  4: [2, 8],
  5: [7],
  6: [1, 7, 8],
  7: [22, 33],
  8: [1, 3],
};

// Breadth-First Search (BFS) for Graph
// Queue: FIFO (First In First Out): array [1, 2, 3] -> push(4) -> [1, 2, 3, 4] -> shift() -> 1, [2, 3, 4]
// O(n) time complexity
// Use queue to keep track of nodes to visit

function bfsGraph(node, startNode) {
  let visited = {};
  let queue = [startNode];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (!visited[currentNode]) {
      console.log(currentNode);
      visited[currentNode] = true;
      let neighbors = node[currentNode];
      console.log("Neighbors of", currentNode, ":", neighbors);
      if (!neighbors) continue;
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }
  console.log("Visited Nodes in Graph:", Object.keys(visited));
}
console.log("BFS Graph Traversal:");
bfsGraph(grath, 7);

function bfsFromTargetThenAll(graph, target) {
  let visited = {};
  let order = [];

  function bfs(start) {
    let queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      let current = queue.shift();
      order.push(current);

      let neighbors = graph[current];
      if (!neighbors) continue;

      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  bfs(target);

  for (let node in graph) {
    if (!visited[node]) {
      bfs(node);
    }
  }

  console.log("Ordem de visita:", order);
}

console.log("BFS from Target Then All:");
bfsFromTargetThenAll(grath, 7);
