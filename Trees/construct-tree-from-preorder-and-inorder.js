function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const buildTree = (preorder, inorder) => {
  if (preorder.length < 1 || inorder.length < 1) return null;
  const val = preorder.shift();
  const root = new TreeNode(val);

  const mid = inorder.indexOf(val);

  const left = inorder.slice(0, mid);
  const right = inorder.slice(mid + 1, inorder.length);

  root.left = buildTree(preorder, left);
  root.right = buildTree(preorder, right);

  return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
