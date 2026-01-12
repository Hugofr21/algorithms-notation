// Missing squence number
// O(1)
// forml: N(N +1) /2

let arr = [4, 1, 5, 6, 3, 0];

function missingNumberSum(arr, n) {
  let sum = (n * (n + 1)) / 2;
  let result = arr.reduce((acc, current) => acc + current, 0);
  return sum - result;
}

function missingNumber(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = [];

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(missingNumber(arr));
console.log(missingNumberSum(arr, arr.length));
