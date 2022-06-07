// https://www.youtube.com/watch?v=V0xjK_6ZoEY&ab_channel=KeepOnCoding

const input = [
  ["animal", "mammal"],
  ["animal", "bird"],
  ["lifeform", "animal"],
  ["cat", "lion"],
  ["mammal", "cat"],
  ["animal", "fish"],
];

const printTree = (input) => {
  const children = new Set();
  const adjList = new Map();

  input.forEach(([parent, child]) => {
    const kids = adjList.get(parent);
    if (kids) {
      kids.push(child);
    } else {
      adjList.set(parent, [child]);
    }

    children.add(child);
  });

  let root = "";
  for (const parent of adjList.keys()) {
    if (!children.has(parent)) root = parent;
  }

  const dfs = (root, level, result) => {
    result = root + "\n";
    for (let i = 0; i < level; i++) {
      result = "\t" + result;
    }

    const children = adjList.get(root);
    if (children && children.length > 0) {
      for (const child of children) {
        result += dfs(child, level + 1, result);
      }
    }

    return result;
  };

  return dfs(root, 0, "");
};

console.log(printTree(input));

// 1: lifeform
// 2:	  animal
// 3:		  mammal
// 4:			  cat
// 5:				  lion
// 6:		  bird
// 7:		  fish
