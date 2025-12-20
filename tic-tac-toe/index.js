// array with all winning combinations
// rols, columns and diagonals

let matriz = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

function generateWinningCombinations() {
  const combinations = [];
  // Rows
  for (let i = 0; i < 3; i++) {
    combinations.push([i * 3, i * 3 + 1, i * 3 + 2]);
  }
  // Columns
  for (let i = 0; i < 3; i++) {
    combinations.push([i, i + 3, i + 6]);
  }
  // Diagonals
  combinations.push([0, 4, 8]);
  combinations.push([2, 4, 6]);
  return combinations;
}

// 0 * 3 = 0, 0 * 3 + 1 = 1, 0 * 3 + 2 = 2
// 1 * 3 = 3, 1 * 3 + 1 = 4, 1 * 3 + 2 = 5
// 2 * 3 = 6, 2 * 3 + 1 = 7, 2 * 3 + 2 = 8
function printBoard(board) {
  for (let i = 0; i < 3; i++) {
    console.log(board.slice(i * 3, i * 3 + 3).join(" | "));
    if (i < 2) console.log("---------");
  }
}

function checkWin(board, symbol) {
  const winningCombinations = generateWinningCombinations();
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
      return true;
    }
  }
  return false;
}

console.log(generateWinningCombinations());
console.log(printBoard(["X", null, "O", null, "X", null, "O", null, "X"]));
console.log(checkWin(["X", null, "O", null, "X", null, "O", null, "X"], "X"));

// Using algothmetic to calculate winning combinations
// Depth-First Search (DFS)

// User class to represent a player
// with name and symbol (X or O)

// class User {
//   constructor(name, symbol) {
//     this.name = name;
//     this.symbol = symbol;
//   }
//   playMove(board, position) {
//     if (board[position] === null) {
//       board[position] = this.symbol;
//       return true;
//     }
//     return false;
//   }
// }

// class Game {
//   constructor(player1, player2) {
//     this.board = Array(9).fill(null);
//     this.player1 = player1;
//     this.player2 = player2;
//     this.currentPlayer = player1;
//   }
//   switchPlayer() {
//     this.currentPlayer === this.player1 ? this.player2 : this.player1;
//   }

//   checkWin() {
//     for (let i = 0; i < matriz.length; i++) {
//       const [a, b, c] = matriz[i];
//       if (
//         this.board[a] &&
//         this.board[a] === this.board[b] &&
//         this.board[a] === this.board[c]
//       ) {
//         return true;
//       }
//     }
//     return false;
//   }
//   isDraw() {
//     return this.board.every((cell) => cell !== null);
//   }

//   resetGame() {
//     this.board = Array(9).fill(null);
//     this.currentPlayer = this.player1;
//   }
// }
