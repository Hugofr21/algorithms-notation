// 0 1 2 3 4 5 6 7 8 9 10 11
//     * * * * *
//     *       *
//     *       *
//     *       *
//     * * * * *

// step 1: for i from 1 to size
// step 2: for j from 1 to size do
// step 3: if i is 1 or i is size or j is 1 or j is size then print chartSymbol
// step 4: else print space
// step 5: print new line

function drawSquare(size) {
  let square = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      console.log(i, j);
      if (i === 1 || i === size || j === 1 || j === size) {
        square += chartSymbol;
      } else {
        square += " ";
      }
    }
    square += "\n";
  }
  return square;
}

const chartSymbol = "*";
console.time("Draw Square");
console.log(drawSquare(5));
console.timeEnd("Draw Square");

// output:
// Draw Square: 0.123ms
// * * * * *
// *       *
// *       *
// *       *
// * * * * *
// (1,1)
