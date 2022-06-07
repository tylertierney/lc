import TreeNode from "./TreeNode.js";

// const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
};

const inorderTraversalRecursive = (root) => {
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

const inorderTraversalIterative = (root) => {
  const res = [];
  let curr = root;
  const stack = [];

  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};

console.log(inorderTraversalIterative(root));
