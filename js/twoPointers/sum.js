let array = [-6, 5, -8, 20, 3, 4, 7, 9, 11, -2];
let targetSum = 7;

function twoPointerSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];
    console.log(
      `Left Value: ${arr[left]}, Right Value: ${arr[right]}, Current Sum: ${currentSum}`
    );
    if (currentSum > target) {
      right--;
    } else if (currentSum < target) {
      left++;
    }

    if (currentSum === target) {
      console.log(
        `Found a pair: (${arr[left]}, ${arr[right]}) that sums to ${target}`
      );
      left++;
      right--;
    }
  }
}

twoPointerSum(array, targetSum);
