function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

const sortedArrayToBST = (nums) => {
  const l = 0;
  const r = nums.length - 1;

  const search = (l, r) => {
    if (l > r) return null;
    if (l === r) return new TreeNode(nums[l]);

    const mid = Math.floor((l + r) / 2);
    const newNode = new TreeNode(nums[mid]);

    newNode.left = search(l, mid - 1);
    newNode.right = search(mid + 1, r);
    return newNode;
  };

  return search(l, r);
};

const nums = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(nums));
