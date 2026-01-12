// Count elemnt chart s in a string

let string = "A STRING";

function countCharacterOccurrences(str) {
  let n = str.length;
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (str[i] != " ") {
      count++;
    }
  }
  return count;
}

console.time("Character Count Time");
let characterCount = countCharacterOccurrences(string);
console.log("Total characters (excluding spaces):", characterCount);
console.timeEnd("Character Count Time");
