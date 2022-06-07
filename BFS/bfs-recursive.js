const root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

const levelOrder = (root) => {
  if (!root) return [];
  const res = [];

  const traverse = (node, level) => {
    if (!node) return;

    if (res[level]) {
      res[level].push(node.val);
    } else {
      res[level] = [node.val];
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return res;
};

console.log(levelOrder(root));
