
function bitFlip(num) {
  let ans = "";

  while (num >= 1) {
    ans = (num % 2) + ans;

    num = Math.floor(num / 2);
  }

  return ans;
}

console.log(bitFlip(23));