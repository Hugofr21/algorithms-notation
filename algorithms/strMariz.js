// String: SEE
// 1 2 3 4 5 6 6 7 8 9 10
// S A P E R A T I O N  K
// E X A M P L E S J A  B
// E N T R A N C E A S  E

// Matrix Representation
let str = [
  ["S", "A", "P", "E", "R", "A", "T", "I", "O", "N", "E", "K"],
  ["E", "X", "A", "M", "P", "L", "E", "S", "J", "A", "L", "B"],
  ["E", "N", "T", "R", "A", "N", "C", "E", "A", "S", "E", "E"],
];

// Step1: Find all occurrences of 'S', 'E', 'E' in the matrix
// Step2: Store their positions: [row, column]
// Step3: Return the list of positions

function findOccurrences(matrix, target) {
  let positions = [];
  let targetLength = target.length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j], target.substring(0, 1));
      if (matrix[i][j] === target.substring(0, 1)) {
        let match = true;
        for (let k = 1; k < targetLength; k++) {
          if (
            j + k >= matrix[i].length ||
            matrix[i][j + k] !== target.substring(k, k + 1)
          ) {
            match = false;
            break;
          }
        }
        if (match) {
          let pos = [];
          for (let k = 0; k < targetLength; k++) {
            pos.push([i, j + k]);
          }
          positions.push(pos);
        }
      }
    }
  }
  return positions;
}

let target = "SEE";
console.time("findOccurrences");
let occurrences = findOccurrences(str, target);
console.log(`Occurrences of '${target}':`, occurrences);
console.timeEnd("findOccurrences");

function dfs(matrix, word, x, y, index, visited) {
  if (index === word.length) return true;
  if (
    x < 0 ||
    y < 0 ||
    x >= matrix.length ||
    y >= matrix[0].length ||
    visited.has(`${x},${y}`) ||
    matrix[x][y] !== word[index]
  ) {
    return false;
  }
  visited.add(`${x},${y}`);
  let found =
    dfs(matrix, word, x + 1, y, index + 1, visited) ||
    dfs(matrix, word, x - 1, y, index + 1, visited) ||
    dfs(matrix, word, x, y + 1, index + 1, visited) ||
    dfs(matrix, word, x, y - 1, index + 1, visited);
  visited.delete(`${x},${y}`);
  return found;
}
function exist(matrix, word) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (dfs(matrix, word, i, j, 0, new Set())) {
        return true;
      }
    }
  }
  return false;
}

console.time("exist");
let result = exist(str, target);
console.log(`Existence of '${target}':`, result);
console.timeEnd("exist");
