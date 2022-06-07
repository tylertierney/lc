const root = {
  val: "ABC",
  children: [
    {
      val: "A",
      children: [
        {
          val: "B",
          children: [
            {
              val: "C",
              children: [],
            },
          ],
        },
        {
          val: "C",
          children: [
            {
              val: "B",
              children: [],
            },
          ],
        },
      ],
    },
    {
      val: "B",
      children: [
        {
          val: "A",
          children: [
            {
              val: "C",
              children: [],
            },
          ],
        },
        {
          val: "C",
          children: [
            {
              val: "A",
              children: [],
            },
          ],
        },
      ],
    },
    {
      val: "C",
      children: [
        {
          val: "B",
          children: [
            {
              val: "A",
              children: [],
            },
          ],
        },
        {
          val: "A",
          children: [
            {
              val: "B",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// const findRootToLeafPaths = (root) => {
//   let res = [];

//   const dfs = (node, path) => {
//     if (!node.left && !node.right) {
//       res.push([...path, node.val]);
//       return;
//     }
//     if (node.left) dfs(node.left, [...path, node.val]);
//     if (node.right) dfs(node.right, [...path, node.val]);
//     return;
//   };

//   dfs(root, []);
//   return res;
// };

// const permute2 = (root) => {
//   let res = [];

//   const dfs = (node, path) => {
//     if (node.children.length < 1) res.push([...path, node.val]);

//     for (let child of node.children) {
//       dfs(child, [...path, node.val]);
//     }
//     return;
//   };

//   dfs(root, []);
//   return res;
// };

const permute = (nums) => {
  let res = [];

  const dfs = (nums, path) => {
    if (nums.length === 1) {
      res.push([...path, nums[0]]);
      return;
    }

    let i = 0;
    while (i < nums.length) {
      let arr = [...nums];
      arr.splice(i, 1)[0];

      dfs(arr, [...path, nums[i]]);
      i++;
    }

    return;
  };
  dfs(nums, []);
  return res;
};

// const nums = ["a", "b", "c"];
const nums = [1, 2, 3];
const first = "a";
console.log(permute(nums));
