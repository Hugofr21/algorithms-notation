let low = 2100010;
let high = 2100020;

let sum = low + high;
let mid = sum / 2;

console.time("Sum and Midpoint Calculation");
console.log("Sum is:", sum);
console.log("Midpoint is:", mid);
console.timeEnd("Sum and Midpoint Calculation");

function duplicateZeros(number) {
  let strNum = number.toString();
  let result = "";
  let lastZero = false;

  for (let char of strNum) {
    if (char === "0") {
      if (!lastZero) {
        result += "0";
        lastZero = true;
      }
    } else {
      result += char;
      lastZero = false;
    }
  }

  return Number(result);
}

console.time("Duplicate Zeros");
console.log("After Duplicating Zeros:", duplicateZeros(low));

console.timeEnd("Duplicate Zeros");
