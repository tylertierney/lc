const root = {
  val: 5,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: null,
  },
};

const checkTree = function (root) {
  if (root.val === root.right.val + root.left.val) return true;

  return false;
};

console.log(checkTree(root));
