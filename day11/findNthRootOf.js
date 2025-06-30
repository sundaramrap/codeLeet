function solutionRoot(N, M) {
  let low = 0;
  let high = N;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (Math.pow(mid, N) === M) return mid;
    else if (Math.pow(mid, N) < M) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return -1;
}

console.log(solutionRoot(3, 27));
