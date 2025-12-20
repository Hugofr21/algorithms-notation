function maxElementVector(vector) {
  let n = vector.length;
  if (n === 0) {
    return null;
  }
  let maxElement = vector[0];
  for (let i = 1; i < n; i++) {
    if (vector[i] > maxElement) {
      maxElement = vector[i];
    }
  }
  return maxElement;
}

console.log(maxElementVector([3, 5, 7, 2, 8, -1]));

const max = Math.max(...[10, 4, 2, 15, 6]);
console.log(max);
