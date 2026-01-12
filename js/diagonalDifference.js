function diagonalDifference(arr) {
  let sum = 0;
  let reverseSum = 0;
  let row = 1;
  let col = 0;

  while (row < arr.length && arr[row][col] !== undefined) {
    sum += arr[row][col];
    console.log(`Adicionando ${arr[row][col]} à soma principal`);
    row++;
    col++;
  }

  row = 1;
  col = arr[1].length - 1;

  while (row < arr.length && arr[row][col] !== undefined) {
    reverseSum += arr[row][col];
    row++;
    col--;
  }

  console.log("Soma da diagonal principal:", sum);
  console.log("Soma da diagonal secundária:", reverseSum);
  return Math.abs(sum - reverseSum);
}

let result = diagonalDifference([[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]);
console.log("Diferença Diagonal:", result);
