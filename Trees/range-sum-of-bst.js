import TreeNode from "./TreeNode.js";

const root = new TreeNode(10);
root.right = new TreeNode(15, null, new TreeNode(18));
root.left = new TreeNode(5, new TreeNode(3), new TreeNode(7));

const rangeSumBST = (root, low, high) => {
  let res = 0;

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    if (node.val >= low && node.val <= high) {
      res += node.val;
    }
    traverse(node.right);
  };
  traverse(root);
  return res;
};

console.log(rangeSumBST(root, 7, 15));
