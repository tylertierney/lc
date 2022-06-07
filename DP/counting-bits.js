const convertToBinary = (n) => {
  let res = "";

  while (n > 0) {
    const current = n;
    n = Math.floor(n / 2);
    const remainder = String(current % 2);
    res = remainder + res;
  }
  return res;
};

const countOnes = (n) => {
  let res = 0;
  while (n > 0) {
    const current = n;
    n = Math.floor(n / 2);
    const remainder = String(current % 2);
    if (remainder === "1") res++;
  }
  return res;
};

const countBits = (n) => {
  let offset = 1;
  const dp = [0];

  let i = 1;
  while (i < n + 1) {
    if (i === offset * 2) {
      offset = offset * 2;
    }
    dp.push(1 + dp[i - offset]);
    i++;
  }
  return dp;
};

console.log(countBits(0));
