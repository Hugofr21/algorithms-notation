let array = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// O(n) time complexity solution

console.time("removeDuplicates");
console.log(removeDuplicates(array));
console.timeEnd("removeDuplicates");

function removeDuplicatesUsingFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
// O(n^2) time complexity solution

console.time("removeDuplicatesUsingFilter");
console.log(removeDuplicatesUsingFilter(array));
console.timeEnd("removeDuplicatesUsingFilter");

function removeDuplicatesUsingReduce(arr) {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}

// O(n^2) time complexity solution
console.time("removeDuplicatesUsingReduce");
console.log(removeDuplicatesUsingReduce(array));
console.timeEnd("removeDuplicatesUsingReduce");

function removeDuplicatesUsingLoop(arr) {
  let unique = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

// O(n^2) time complexity solution
console.time("removeDuplicatesUsingLoop");
console.log(removeDuplicatesUsingLoop(array));
console.timeEnd("removeDuplicatesUsingLoop");
