let nums = [-1, 0, 1, 2, -1, -4];

const threesum = (nums, target) => {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    if (nums[i] === nums[i - 1]) continue;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < target) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > target) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        console.log(nums[i], nums[j], nums[k]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
};
threesum(nums, 0);
