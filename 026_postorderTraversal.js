// 题目描述：给定一个二叉树，返回它的前序（后序）遍历序列。

// 示例:

// 输入: [1,null,2,3]

// 1
//  \
//   2
//  /
// 3
// 输出: [3,2,1]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

const tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
};

const postorderTraversal = root => {
  let res = [];
  let stack = [];
  if (!root) return res;
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.unshift(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return res;
};

console.log(postorderTraversal(tree));
