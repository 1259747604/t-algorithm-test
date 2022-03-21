// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。

// 示例:

// 输入: [1,null,2,3]

// 1
//  \
//   2
//  /
// 3
// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

let tree = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
};

const preorderTraversal = root => {
  let res = [];
  let stack = [];
  if (!root) return res;
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
};

console.log(preorderTraversal(tree));
