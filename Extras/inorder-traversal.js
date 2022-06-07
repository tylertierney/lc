const inorderTraversal = (root) => {
  const res = [];
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return res;
};

const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    right: null,
    left: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

console.log(inorderTraversal(root));
