const graph = {
  1: { 2: 2, 3: 8 },
  2: { 1: 2, 4: 1, 5: 7 },
  3: { 1: 8, 4: 3 },
  4: { 2: 1, 3: 3, 5: 4 },
  5: { 2: 7, 4: 4 },
};
function algorithm_dijkstra(graph, start, target) {
  // Priority Queue simples (para demonstração, em produção usaríamos um Binary Heap)
  // Estrutura: [{node: '1', cost: 0}]
  let queue = [{ node: start.toString(), cost: 0 }];

  // Rastreamento de Pais para reconstrução (Substitui o Set visited incorreto)
  let cameFrom = { [start]: null };

  // Custo acumulado (g-score)
  let costSoFar = { [start]: 0 };

  while (queue.length > 0) {
    // 1. Ordenar a fila para simular Priority Queue (O(n log n))
    // Isso garante que sempre expandimos o nó de MENOR custo acumulado
    queue.sort((a, b) => a.cost - b.cost);

    // 2. Pop no nó com menor custo
    let currentObj = queue.shift();
    let current = currentObj.node;

    if (current === target.toString()) {
      return buildPathCorrect(cameFrom, start, target);
    }

    // 3. Expansão
    let neighbors = graph[current] || {};

    for (let neighbor in neighbors) {
      let newCost = costSoFar[current] + neighbors[neighbor];

      // Se não visitamos ainda OU encontramos um caminho mais barato
      if (!(neighbor in costSoFar) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        cameFrom[neighbor] = current; // Registra o pai
        queue.push({ node: neighbor, cost: newCost });
      }
    }
  }
  console.log("Target not reachable");
}

function buildPathCorrect(cameFrom, start, target) {
  let current = target.toString();
  let path = [];

  // Backtracking usando o dicionário cameFrom
  while (current !== start.toString()) {
    path.push(current);
    current = cameFrom[current];
  }
  path.push(start.toString());
  path.reverse();

  console.log("Caminho Ótimo Encontrado:", path.join(" -> "));
  return path;
}

// Execução
algorithm_dijkstra(graph, 1, 5);
