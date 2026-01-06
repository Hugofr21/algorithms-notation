//Matrix: row = n, col = m 4x4
//Target: target
// 1 2 3 4 5 6
// 7 8 9 10 11
// 13 14 15 16
// 19 20 21 22

// 1 step: Start from top right corner
// 2 step: Compare current value with target
// 3 step: If target is midle matrix return true
let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11],
  [13, 14, 15, 16],
  [19, 20, 21, 22],
];

let target = 14;

function searchInMatrix(mat, target) {
  let row = 0;
  let col = mat[0].length - 1;
  let midle = Math.floor(mat.length / 2);
  while (row < mat.length && col >= 0) {
    let currentValue = mat[row][col];
    console.log(`Current Value: ${currentValue} at position (${row}, ${col})`);
    if (currentValue === target) {
      console.log(`Found target ${target} at position (${row}, ${col})`);
      return true;
    } else if (currentValue > target) {
      col--;
    } else if (currentValue < target) {
      row++;
    } else if (row === midle && col === midle) {
      break;
    }
  }

  return false;
}
searchInMatrix(matrix, target);
