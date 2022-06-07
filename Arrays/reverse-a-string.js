var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const tempRight = s[right];
    const tempLeft = s[left];
    s[left] = tempRight;
    s[right] = tempLeft;
    left++;
    right--;
  }

  return s;
};

const s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
