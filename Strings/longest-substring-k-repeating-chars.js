const longestSubstring = (s, k) => {
  if (s.length < k) return 0;
  if (s.length < 2) return s.length;

  const frequencies = {};
  let i = 0;
  while (i < s.length) {
    if (s[i] in frequencies) {
      frequencies[s[i]]++;
    } else {
      frequencies[s[i]] = 1;
    }
    i++;
  }

  let j = 0;
  while (j < s.length) {
    if (frequencies[s[j]] < k) {
      const left = longestSubstring(s.substring(0, j), k);
      const right = longestSubstring(s.substring(j + 1, s.length), k);
      return Math.max(left, right);
    }

    j++;
  }

  return s.length;
};

const s = "weitong";
const k = 2;

console.log(longestSubstring(s, k));
