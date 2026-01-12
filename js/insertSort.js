function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    console.log(`Inserting element at index ${i}: ${key}`);
    let j = i - 1;
    console.log(`Element at index ${j}: ${arr[j]}`);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

let array = [5, 2, 9, 1, 5, 6, 3, 7, 8, 4, 0, -1, -3, 10, -2, 12, 11, 1.005];
console.log("Original array:");
console.log(array);
insertSort(array);
console.log("Sorted array:");
console.log(array);
