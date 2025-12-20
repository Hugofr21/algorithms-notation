// 1 2 3 4 5 6 7 8 9 10 11
//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *
// * * * * * * * * * * *

// setep 1: for i from 1 to size
// step 2: for j from 1 to size - i do print space
// step 3: for k from 1 to 2 * i - 1 do print chartSymbol
// step 4: print new line

function drawTriangle(size) {
  let triangle = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size - i; j++) {
      triangle += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      triangle += chartSymbol;
    }
    triangle += "\n";
  }
  return triangle;
}

const chartSymbol = "*";
console.time("Draw Triangle");
console.log(drawTriangle(5));
console.timeEnd("Draw Triangle");
