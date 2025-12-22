// hae and via ecy
function encryptString(str) {
  let part = str.split("");
  let column = Math.ceil(Math.sqrt(part.length));
  let result = [];

  for (let i = 0; i < column; i += 1) {
    let temp = "";
    let j = i;

    while (j < part.length) {
      temp += part[j];
      j += column;
    }
    result.push(temp);
  }
  return result.join(" ");
}

console.log(encryptString("haveaniceday"));
