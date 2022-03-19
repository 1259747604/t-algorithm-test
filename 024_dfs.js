// 限定组合问题：及时回溯，即为“剪枝”
// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例: 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]

const combine = (n, k) => {
  const res = [];
  const subsets = [];

  const dfs = index => {
    if (subsets.length === k) {
      res.push(subsets.slice());
      return;
    }
    for (let i = index; i <= n; i++) {
      subsets.push(i);
      dfs(i + 1);
      subsets.pop();
    }
  };

  dfs(1);
  return res;
};

console.log(combine(4, 2));
