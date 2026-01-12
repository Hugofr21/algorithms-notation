let array = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

function removeDuplicates(arr, n) {
  let i = 0;
  let j = 0;
  let arrayNew = [];

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return arr.slice(0, i + 1);
}

// O(n) time complexity solution

console.time("removeDuplicates");
console.log(removeDuplicates(array, array.length));
console.timeEnd("removeDuplicates");
