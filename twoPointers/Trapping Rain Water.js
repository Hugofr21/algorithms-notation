let array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Index:  0 1 2 3 4 5 6 7 8 9 10 11
// Height: 0 1 0 2 1 0 1 3 2 1 2 1
// Water:  0
// bars:   #

// Visualization of the array and trapped water
//               #
//       # 0 0 0 # # 0 #
//   # 0 # # 0 # # # # #  #
// 0 1 2 3 4 5 6 7 8 9 10 11

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax < rightMax) {
      totalWater += leftMax - height[left];
      left++;
    } else {
      totalWater += rightMax - height[right];
      right--;
    }
  }
  return totalWater;
}

console.log(trap(array));
