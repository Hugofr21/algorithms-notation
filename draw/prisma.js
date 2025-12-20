// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//       *
//      * *
//     *   *
//    *     *
//     *   *
//      * *
//       *

// step 1: for i from 1 to size do
// step 2: for j from 1 to size - i do print space
// step 3: for k from 1 to 2 * i - 1 do
// step 4: if k is 1 or k is 2 * i - 1 then print chartSymbol
// step 5: else print space
// step 6: Inverted pyramid
// step 7: Join both pyramids
// step 8: print new line

function drawPrisma(size) {
  let prisma = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size - i; j++) {
      prisma += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        prisma += chartSymbol;
      } else {
        prisma += " ";
      }
    }
    prisma += "\n";
  }
  return prisma;
}

function drawInvertedPrisma(size) {
  let invertedPrisma = "";
  for (let i = size; i >= 1; i--) {
    for (let j = 1; j <= size - i; j++) {
      invertedPrisma += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        invertedPrisma += chartSymbol;
      } else {
        invertedPrisma += " ";
      }
    }
    invertedPrisma += "\n";
  }
  return invertedPrisma;
}

function drawFullPrisma(size) {
  return drawPrisma(size) + drawInvertedPrisma(size);
}

const chartSymbol = "*";
console.time("Draw Prisma");
console.log(drawFullPrisma(7));
console.timeEnd("Draw Prisma");
