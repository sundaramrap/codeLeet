console.log(`...connecion check`);

function bitFlip(num) {
  let ans = "";

  while (num >= 1) {
    ans = (num % 2) + ans;

    num = Math.floor(num / 2);
  }

  return ans;
}

console.log(bitFlip(23));

function bitNumber(num) {
  let ans = 0;
  const n = num.length;

  for (let i = n - 1; i >= 0; i--) {
    const bit = parseInt(num[i], 10);
    ans += bit * Math.pow(2, n - 1 - i);
  }

  return ans;
}

console.log(bitNumber("10111"));

function bitNumber(num) {
  let ans = 0;
  const n = num.length;

  for (let i = n - 1; i >= 0; i--) {
    const bit = parseInt(num[i], 10);
    ans += bit * Math.pow(2, n - 1 - i);
  }

  return ans;
}

console.log(bitNumber("10111"));
