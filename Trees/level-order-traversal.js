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
      right: null,
      left: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

const levelOrder = (root) => {
  const res = [];
  const queue = [root];

  const traverse = (node, level) => {
    if (!node) return;

    if (res[level]) {
      res[level].push(node.val);
    } else {
      res.push([node.val]);
    }
    queue.shift();
    queue.push(node.left);
    queue.push(node.right);
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return res;
};

console.log(levelOrder(root));
