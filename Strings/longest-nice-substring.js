const longestNiceSubstring = (s) => {
  const traverse = (current) => {
    if (current.length < 2) return "";
    const uniques = new Set(current);
    let i = 0;
    while (i < current.length) {
      if (
        !uniques.has(current[i].toLowerCase()) ||
        !uniques.has(current[i].toUpperCase())
      ) {
        const left = traverse(current.substring(0, i));
        const right = traverse(current.substring(i + 1, current.length));

        return left.length >= right.length ? left : right;
      }
      i++;
    }
    return current;
  };

  return traverse(s);
};

const s = "YazaAay";

console.log(longestNiceSubstring(s));
