const lengthOfLastWord = (s) => {
  let count = 0;
  let i = 0;

  while (i <= s.length - 1) {
    const currLetter = s[s.length - 1 - i];

    if (currLetter !== " ") {
      count++;
    }
    if (currLetter === " " && count > 0) {
      return count;
    }
    i++;
  }
  return count;
};

// len 12
// const s = "H";
const s = "Hello World ";
console.log(lengthOfLastWord(s));
