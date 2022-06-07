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

const preorderTraversalRecursive = (root) => {
  const result = [];
  const traverse = (node) => {
    if (!node) return;

    result.push(node.val);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(root);
  return result;
};

const preorderTraversalIterative = (root) => {
  const res = [];
  let curr = root;
  const stack = [];

  while (stack.length > 0 || curr) {
    while (curr) {
      res.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    curr = curr.right;
  }
  return res;
};

console.log(preorderTraversalIterative(root));
