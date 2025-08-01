// function fibbo(n) {
//   if (n <= 1) {
//     return 1;
//   }

//   return fibbo(n - 1) + fibbo(n - 2);
// }

// console.log(fibbo(5));

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target <= arr[mid]) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

let arr = [1, 2, 4, 6, 8, 47, 80];
let biOut = binarySearch(arr, 8);
console.log(biOut);
