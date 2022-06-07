const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let sub = new Map();
  let l = 0;
  let r = 0;

  while (r < s.length) {
    const char = s.charAt(r);
    if (sub.has(char)) {
      if (sub.get(char) >= l) {
        l = sub.get(char) + 1;
      }
    }
    max = Math.max(max, r - l + 1);
    sub.set(char, r);
    r++;
  }
  return max;
};

// const s = "abcaz";
const s = "pwwkew";
//         p w w k e w

console.log(lengthOfLongestSubstring(s));
