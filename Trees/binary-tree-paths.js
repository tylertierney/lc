const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const binaryTreePaths = (root) => {
  const res = [];
  const set = new Set();

  const traverse = (node, path) => {
    path += "->" + String(node.val);
    if (!node.left && !node.right) {
      set.add(path.slice(2));
    }
    if (node.left) traverse(node.left, path);
    if (node.right) traverse(node.right, path);
  };

  traverse(root, "");

  set.forEach((path) => {
    res.push(path);
  });
  return res;
};

console.log(binaryTreePaths(root));
