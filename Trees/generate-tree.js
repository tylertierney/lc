function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const generateTree = (root) => {
  const queue = [...root];

  const generate = (node) => {
    if (!node) return;
  };
};

const root = [3, 9, 20, null, null, 15, 7];

console.log(generateTree(root));
