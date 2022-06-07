const root = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 5,
          children: [],
        },
        { val: 6, children: [] },
      ],
    },
    {
      val: 3,
      children: [
        {
          val: 7,
          children: [],
        },
      ],
    },
    {
      val: 4,
      children: [
        {
          val: 8,
          children: [],
        },
      ],
    },
  ],
};

const printTree = (root) => {
  let res = "";

  const dfs = (node, level) => {
    let i = 0;
    while (i < level) {
      res += "\t";
      i++;
    }
    res += node.val + "\n";

    node.children.forEach((child) => {
      dfs(child, level + 1);
    });
  };

  dfs(root, 0);
  return res;
};

console.log(printTree(root));
