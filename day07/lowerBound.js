// function lowerBound(nums, target) {
//   let n = nums.length;
//   let low = 0;
//   let high = n - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) return mid;
//     else if (nums[mid] < target) {
//       high = mid - 1;
//     } else low = mid + 1;
//   }
// }

function findLowhigh(nums, target) {
  function lowerBound(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] >= target) {
        ans = mid;
        high = mid - 1;
      } else low = mid + 1;
    }
  }

  function uppperBound(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] > target) {
        ans = mid;
        high = mid - 1;
      } else low = mid + 1;
    }
  }
}

function answer(nums, target) {
  let n = nums.length;
  const lb = lowerBound(nums, target);
  if (lb == n || nums[lb] != target) {
    return [-1, -1];
  }
  return [lb, uppperBound(nums, target) - 1];
}
