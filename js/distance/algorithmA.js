// 1. Definição do Grafo com Coordenadas (Necessário para a Heurística)
// Adicionei coordenadas (x, y) para simular um espaço físico.
const nodes = {
  1: { x: 0, y: 0 },
  2: { x: 2, y: 0 },
  3: { x: 0, y: 5 },
  4: { x: 2, y: 3 },
  5: { x: 5, y: 5 },
};

const graph = {
  1: { 2: 2, 3: 8 },
  2: { 1: 2, 4: 1, 5: 7 }, // Nota: A aresta 2->5 tem peso 7
  3: { 1: 8, 4: 3 },
  4: { 2: 1, 3: 3, 5: 4 }, // Nota: Caminho 2->4->5 custa 1+4=5 (melhor que direto)
  5: { 2: 7, 4: 4 },
};

// 2. Função Heurística (Distância Euclidiana)
// Calcula a distância em linha reta entre o nó atual e o alvo.
function heuristic(nodeA, nodeB) {
  const a = nodes[nodeA];
  const b = nodes[nodeB];
  // Teorema de Pitágoras: sqrt((x2-x1)^2 + (y2-y1)^2)
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function algorithm_a_star(start, target) {
  // OpenSet: Nós a serem avaliados
  // Estrutura: { node: ID, f: CustoTotalEstimado }
  let openSet = [{ node: start.toString(), f: 0 }];

  // CameFrom: Para reconstrução do caminho
  let cameFrom = {};

  // gScore: Custo real do início até o nó atual
  // Inicializa com Infinito para todos, exceto o start
  let gScore = {};
  gScore[start] = 0;

  // fScore: gScore + Heurística
  let fScore = {};
  fScore[start] = heuristic(start, target);

  while (openSet.length > 0) {
    // Otimização: Ordena para pegar o menor fScore (simulação de Priority Queue)
    openSet.sort((a, b) => a.f - b.f);
    let current = openSet.shift().node;

    // Se chegamos ao objetivo, reconstruir o caminho
    if (current === target.toString()) {
      return buildPath(cameFrom, current);
    }

    // Expansão dos vizinhos
    let neighbors = graph[current] || {};
    for (let neighbor in neighbors) {
      // Custo tentativo de g: custo atual + peso da aresta
      let tentative_gScore = gScore[current] + neighbors[neighbor];

      let neighbor_gScore = gScore[neighbor];
      if (neighbor_gScore === undefined) neighbor_gScore = Infinity;

      // Se encontramos um caminho melhor para este vizinho
      if (tentative_gScore < neighbor_gScore) {
        // Atualiza os registros
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentative_gScore;
        let h = heuristic(neighbor, target);
        fScore[neighbor] = tentative_gScore + h;

        // Adiciona ao OpenSet se não estiver lá
        if (!openSet.some((n) => n.node === neighbor)) {
          openSet.push({ node: neighbor, f: fScore[neighbor] });
        }
      }
    }
  }
  console.log("Falha: Caminho não encontrado.");
  return null;
}

function buildPath(cameFrom, current) {
  let totalPath = [current];
  while (current in cameFrom) {
    current = cameFrom[current];
    totalPath.unshift(current);
  }
  console.log("Caminho A* Otimizado:", totalPath.join(" -> "));
}

console.time("Tempo de Execução A*");
algorithm_a_star(1, 5);
console.timeEnd("Tempo de Execução A*");
