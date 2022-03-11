// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

const maxSlidingWindow = (nums, k) => {
  let res = [];
  let deque = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
