function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const original = {
  val: 7,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 19,
      left: null,
      right: null,
    },
  },
};

const target = {
  val: 3,
  left: {
    val: 6,
    left: null,
    right: null,
  },
  right: {
    val: 19,
    left: null,
    right: null,
  },
};

const getTargetCopy = (original, cloned, target) => {
  let result = {};

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    if (node.val === target.val) result = node;
    traverse(node.right);
  };

  traverse(cloned);
  return result;
};

console.log(getTargetCopy(original, { ...original }, target));
