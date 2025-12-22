let matrix = [
  [1, 2, -1, -4, -20],
  [-8, -3, 4, 2, 1],
  [3, 8, 10, 1, 3],
  [-4, -1, 1, 7, -6],
  [0, -4, 10, -5, 1],
];

function matrixElemntSearch(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result = max(result, matrix[i][j]);
    }
  }
  return result;
}

function max(a, b) {
  return a > b ? a : b;
}

const maxElemnt = Math.max(...matrix.flat());
console.time("Matrix Element Search Time");
console.log("Matrix Element Search:");
console.log(matrixElemntSearch(matrix));
console.timeEnd("Matrix Element Search Time");

console.time("Max Element Search Time");
console.log("Max element in matrix using Math.max:");
console.log(maxElemnt);
console.timeEnd("Max Element Search Time");

function printMatrix(matrix) {
  let element = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > element) {
        element = matrix[i][j];
      }
    }
  }
  return element;
}

console.time("Print Matrix Time");
console.log("Print Matrix:");
console.log(printMatrix(matrix));
console.timeEnd("Print Matrix Time");
