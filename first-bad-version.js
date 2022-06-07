const isBadVersion = (num) => {
  if (num >= 2) return true;
  return false;
};

const solution = (isBadVersion, n) => {
  let l = 1;
  let r = n;
  let mid = Math.floor((l + r) / 2);
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (isBadVersion(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

// 1 2 3 4 5

console.log(solution(isBadVersion, 3));
