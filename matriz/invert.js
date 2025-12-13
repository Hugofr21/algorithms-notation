let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function invertMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const midpointRow = Math.floor(rows / 2);
  const midpointCol = Math.floor(cols / 2);
  console.log("Midpoint Row:", midpointRow);
  console.log("Midpoint Column:", midpointCol);
  let inverted = [];
  for (let i = 0; i < rows; i++) {
    inverted[i] = [];
    for (let j = 0; j < cols; j++) {
      inverted[i][j] = matrix[rows - 1 - i][cols - 1 - j];
    }
  }
  return inverted;
}

console.log("Original Matrix:");
console.log(matrix);
console.log("Inverted Matrix:");
console.log(invertMatrix(matrix));
