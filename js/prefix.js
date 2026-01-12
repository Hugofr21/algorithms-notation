function prefix(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = str[i - 1] + str[i];
  }
  return result;
}

let str = [2, 3, 5, 7, 11];
console.log(prefix(str));

function rangePrefix(arr, l, range) {
  if (l === 0) {
    return arr[range];
  }

  let result = arr[l - 1];
  for (let i = l; i <= range; i++) {
    result += arr[i];
  }
  return result;
}

console.log(rangePrefix(str, 0, 1));
