// function fibbo(n) {
//   if (n <= 1) {
//     return 1;
//   }

//   return fibbo(n - 1) + fibbo(n - 2);
// }

// console.log(fibbo(5));

// function binarySearch(arr, target, low = 0, high = arr.length - 1) {
//   if (low > high) {
//     return -1;
//   }

//   let mid = Math.floor((low + high) / 2);

//   if (arr[mid] === target) {
//     return mid;
//   } else if (target <= arr[mid]) {
//     return binarySearch(arr, target, low, mid - 1);
//   } else {
//     return binarySearch(arr, target, mid + 1, high);
//   }
// }

// let arr = [1, 2, 4, 6, 8, 47, 80];
// let biOut = binarySearch(arr, 8);
// console.log(biOut);

// console.log(`Print Number`);
// function printN(n) {
//   if (n <= 0) {
//     return;
//   }

//   printN(n - 1);
//   console.log(n);
// }

// printN(5);

// function fibbo(n) {
//   if (n == 0) {
//     return 1;
//   }

//   return n * fibbo(n - 1);
// }

// let ansFibo = fibbo(4);

// console.log(`The fibbo the number is ${ansFibo}`);

function sumNo(number) {
  if (Math.floor(number / 10) === 0) {
    return number;
  }
  console.log(`the num`, number);
  return Math.floor(number % 10) + sumNo(Math.floor(number / 10));
}

let sumAns = sumNo(1342);
console.log(`LEt the ans :${sumAns}`);
