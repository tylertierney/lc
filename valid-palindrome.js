const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let l = 0;
  while (l < s.length - 1 - l) {
    if (s[l] !== s[s.length - 1 - l]) return false;
    l++;
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";
// const s = "asdfasdf";
console.log(isPalindrome(s));
