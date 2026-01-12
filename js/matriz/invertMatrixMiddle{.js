function invertMatrixMiddle(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const midpointRow = Math.floor(rows / 2);
  console.log("Midpoint Row:", midpointRow);

  function invertHalf(subMatrix) {
    const subRows = subMatrix.length;
    let inverted = [];
    for (let i = 0; i < subRows; i++) {
      inverted[i] = [];
      for (let j = 0; j < cols; j++) {
        inverted[i][j] = subMatrix[subRows - 1 - i][cols - 1 - j];
      }
    }
    return inverted;
  }

  const topHalf = matrix.slice(0, midpointRow);
  const bottomHalf = matrix.slice(midpointRow);

  return Promise.all([
    Promise.resolve(invertHalf(topHalf)),
    Promise.resolve(invertHalf(bottomHalf)),
  ]).then(([invertedTop, invertedBottom]) => {
    return invertedBottom.concat(invertedTop);
  });
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

invertMatrixMiddle(matrix).then((inverted) => {
  console.log("Inverted Matrix (Middle):");
  console.log(inverted);
});
