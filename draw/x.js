// 1 2 3 4 5 6 7 8 9 10
// X         X
//  X       X
//   X     X
//    X   X
//     X X
//      X
//     X X
//    X   X
//   X     X
//  X       X
// X         X

// Function to draw an "X" pattern of size n
// where n is an even integer
// Example: n = 10
// rows = n - i - 1: get the reverse index for the second diagonal

function drawX(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      let midle = Math.floor(n / 2);
      if (j === i || (j === n - i - 1 && j !== midle && i !== midle)) {
        line += "X";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
drawX(10);
