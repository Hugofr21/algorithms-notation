let arr = ["i", "love", "let", "and", "coding", "i", "love", "Letcoding"];
let k = 2;

function elementFrequency(arr, k) {
  let frequencyMap = new Map();
  for (let word of arr) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }
  let frequencyArray = Array.from(frequencyMap.entries());
  frequencyArray.sort((a, b) => b[1] - a[1]); // Sort by frequency descending
  let result = frequencyArray.slice(0, k).map((entry) => entry[0]);
  return result;
}

console.log(elementK(arr, k));
