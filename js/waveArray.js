// Wave Array
// [3, 6, 5, 10, 7, 20];
// new array should be [6, 3, 10, 5, 7, 20, 21]

function waveArray(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

let arr = [3, 6, 5, 10, 7, 20, 21];
console.log(waveArray(arr));
