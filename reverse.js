const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recovered(array, start, end) {
  let element = array[0];
  let tmp;
  while (start < end) {
    tmp = array[start];
    array[start] = array[end];
    array[end] = tmp;
    start++;
    end--;
  }
  console.log(array);
}

recovered(arr, 0, arr.length - 1);
