const canConstruct = (ransomNote, magazine) => {
  // Time: O(m) where m is magazine.length
  // Space: O(26) so O(1) since the map's largest size
  // is the length of the alphabet
  const frequencies = {};

  let i = 0;
  while (i < magazine.length) {
    if (magazine[i] in frequencies) {
      frequencies[magazine[i]]++;
    } else {
      frequencies[magazine[i]] = 1;
    }
    i++;
  }

  i = 0;
  while (i < ransomNote.length) {
    if (ransomNote[i] in frequencies && frequencies[ransomNote[i]] > 0) {
      frequencies[ransomNote[i]]--;
    } else {
      return false;
    }
    i++;
  }

  return true;
};

const ransomNote = "a";
const magazine = "a";
console.log(canConstruct(ransomNote, magazine));
