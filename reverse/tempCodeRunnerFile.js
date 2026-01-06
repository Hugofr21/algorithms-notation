let str = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}
console.time("reverseString");
console.log(reverseString(str));
console.timeEnd("reverseString");
