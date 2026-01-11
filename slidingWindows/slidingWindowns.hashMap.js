// Sliding Window - Hash Map
// Time Complexity: O(L*N)
// Given a string s and an integer k, find the length of the longest substring
// that contains at most k distinct characters.

let s = "abskeabcdeffghaboc";
let k = "abc";

function mapHashFrequency(s, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let charFrequency = new Map();
  while (right < s.length) {
    let rightChar = s[right];
    charFrequency.set(rightChar, (charFrequency.get(rightChar) || 0) + 1);
    while (charFrequency.size > k.length) {
      let leftChar = s[left];
      charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
      if (charFrequency.get(leftChar) === 0) {
        charFrequency.delete(leftChar);
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}

console.log(mapHashFrequency(s, k));

function printHashMapFrequency(s, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let charFrequency = new Map();
  while (right < s.length) {
    let rightChar = s[right];
    charFrequency.set(rightChar, (charFrequency.get(rightChar) || 0) + 1);
    while (charFrequency.size > k.length) {
      let leftChar = s[left];
      charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
      if (charFrequency.get(leftChar) === 0) {
        charFrequency.delete(leftChar);
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    console.log(
      `Window [${left}, ${right}]: ${s.substring(
        left,
        right + 1
      )}, Char Frequency:`,
      Object.fromEntries(charFrequency)
    );
    right++;
  }
  return maxLength;
}

printHashMapFrequency(s, k);
