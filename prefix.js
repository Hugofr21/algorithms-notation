function prefix(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = str[i - 1] + str[i];
  }
  return result;
}

let str = [2, 3, 5, 7, 11];
console.log(prefix(str));
