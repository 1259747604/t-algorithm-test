// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
// 示例：
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]

const permute = nums => {
  let len = nums.length;
  let cur = [];
  let res = [];
  let visited = {};
  const dfs = nth => {
    if (nth === len) {
      res.push(cur.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = true;
        cur.push(nums[i]);
        dfs(nth + 1);
        cur.pop();
        visited[nums[i]] = false;
      }
    }
  };
  dfs(0);
  return res;
};

console.log(permute([1, 2, 3]));
