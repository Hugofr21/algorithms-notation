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

// O(n) time complexity solution
// Output: [ 'd', 'l', 'r', 'o', 'w', ' ', 'o', 'l', 'l', 'e', 'h' ]
// Stack: LIFO

function reverseStringUsingStack(s) {
  let stack = [];
  for (let char of s) {
    stack.push(char);
  }
  return stack;
}

console.time("reverseStringUsingStack");
console.log(reverseStringUsingStack(str));
console.timeEnd("reverseStringUsingStack");
