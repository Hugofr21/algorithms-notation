// 1 2 3 4 5 6 7 8 9 10
//     * * * * * * * * *
//     *               *
//     *               *
//     *               *
//     *               *
//     *      H        *
//     *               *
//     *               *
//     *               *
//     * * * * * * * * *

// step 1: for i from 1 to height
// step 2: for j from 1 to width do
// step 3: if i is 1 or i is height or j is 1 or j is width then print chartSymbol
// step 4: else print space
// step 5: print new line
// step 6: print "H" at the center

function drawRectangle(width, height) {
  let rectangle = "";
  let message = "Hellow World!";
  const centerRow = Math.ceil(height / 2);
  const centerCol = Math.ceil((width - message.length) / 2);
  console.log("Center Position:", centerRow, centerCol);

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (i === 1 || i === height || j === 1 || j === width) {
        rectangle += chartSymbol;
      } else if (i === centerRow && j === centerCol) {
        rectangle += message;
        j += chartSymbol.length - 1; // Adjust for chartSymbol length
      } else {
        rectangle += " ";
      }
    }
    rectangle += "\n";
  }
  return rectangle;
}

const chartSymbol = "*";
console.time("Draw Rectangle");
console.log(drawRectangle(50, 20));
console.timeEnd("Draw Rectangle");
// output:
// Draw Rectangle: 0.123ms
//**********
//*        *
//*        *
//*        *
//*   H    *
//*        *
//*        *
//*        *
//*        *
//**********
