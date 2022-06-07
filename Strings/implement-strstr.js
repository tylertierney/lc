const strStr = (haystack, needle) => {
  let l = 0;

  while (l < haystack.length) {
    if (haystack[l] === needle[0]) {
      let r = 0;
      while (r < needle.length) {
        if (needle[r] !== haystack[l + r]) {
          break;
        }
        if (r === needle.length - 1) {
          return l;
        }
        r++;
      }
    }
    l++;
  }
  return -1;
};

const haystack = "aaaaa";
const needle = "bba";

console.log(strStr(haystack, needle));
