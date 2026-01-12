// 40 < n <= 100
function o1(array) {
  let middle = Math.ceil(Math.sqrt(array.length));
  let left = [];
  let right = [];

  while (middle <= array[array.length - 1]) {
    if (array.length <= middle) {
      break;
    }
    left.push(array.pop());
    console.log("Left:", left);
  }

  while (array.length > 0) {
    right.push(array.pop());
    console.log("Right:", right);
  }
  return { left, right };
}

let array = [13, 22, 43, 64, 85, 36, 47, 42, 99, 58];

console.log("Resultado:", o1(array));
