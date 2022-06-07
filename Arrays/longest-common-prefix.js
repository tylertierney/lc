const longestCommonPrefix = (strs) => {
  if (strs.length === 1) return strs[0];
  let res = "";

  let i = 0;
  while (i < strs[0].length) {
    let currentLetter = strs[0][i];
    let j = 1;
    while (j < strs.length) {
      if (!strs[j][i]) return res;
      if (strs[j][i] !== currentLetter) return res;
      j++;
    }
    res += strs[0][i];
    i++;
  }

  return res;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
