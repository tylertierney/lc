const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      right: null,
      left: null,
    },
    right: null,
  },
};

const postorderTraversal = (root) => {
  const result = [];
  const traverse = (node) => {
    if (!node) return;

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    result.push(node.val);
  };
  traverse(root);
  return result;
};

console.log(postorderTraversal(root));
