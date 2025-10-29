function calculate(x) {
  return x % 11;
}
console.log(calculate(30));

function modArray(arr) {
  return arr.map((num) => (num ^ 10) % 4);
}

console.log(modArray([22, 33, 44, 55, 66]));
