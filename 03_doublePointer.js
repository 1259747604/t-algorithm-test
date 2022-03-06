// 双指针需要是有序的数组
let nums1 = [1, 2, 3, 6];
let nums2 = [1, 3, 4, 5, 7];

const merge = (nums1, nums2) => {
  let m = nums1.length;
  let n = nums2.length;
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  console.log(nums1);
};
merge(nums1, nums2);
