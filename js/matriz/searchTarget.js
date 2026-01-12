let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function searchTarget(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

console.log("Searching for target positions in the matrix:");
console.log(searchTarget(matrix, 7));

console.log("Searching for target positions in the matrix:");
console.log(searchTarget(matrix, 20));

console.log("Searching for target positions in the matrix:");
console.log(searchTarget(matrix, 1));
