const arr = [1, 3, 2, 6, 7, 4];

const twoSum = (nums, target) => {
  let diffs = {};
  for (let i = 0; i < nums.length; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      console.log(target - nums[i], nums[i]);
    }
    diffs[nums[i]] = i;
  }
};

twoSum(arr, 7);
