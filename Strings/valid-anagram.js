const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  s = s.split("").sort();
  t = t.split("").sort();

  s = s.join("");
  t = t.join("");

  return s === t ? true : false;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
