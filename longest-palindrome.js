const longestPalindrome = (s) => {
  const f = {};

  let i = 0;
  while (i < s.length) {
    f[s[i]] = f[s[i]] ? f[s[i]] + 1 : 1;
    i++;
  }

  let extraChars = 0;
  let recurringChars = 0;
  for (const key in f) {
    if (f[key] > 1) recurringChars += f[key];
    if (f[key] === 1) extraChars = 1;
  }

  if (recurringChars % 2 === 0 && extraChars) {
    return recurringChars + extraChars;
  }
  return recurringChars;
};

// const s = "bananas";
// const s = "abccccdd";
const s = "abbbbda";
console.log(longestPalindrome(s));
