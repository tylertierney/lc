const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};

const levelOrder = (root) => {
  if (!root) return;
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const level = [];
    const len = queue.length;

    let i = 0;
    while (i < len) {
      const node = queue.shift();
      level.push(node.val);
      node.children.forEach((child) => {
        queue.push(child);
      });
      i++;
    }
    res.push(level);
  }

  return res;
};

console.log(levelOrder(root));
