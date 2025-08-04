function sorted(arr, index) {
  if (index === arr.length - 1) {
    return true;
  }

  return arr[index] < arr[index + 1] && sorted(arr, index + 1);
}

let arr = [2, 3, 4, 5, 6, 7, 10];
let ans = sorted(arr, 0);
console.log(ans);
