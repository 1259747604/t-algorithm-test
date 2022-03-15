// 二叉树进行层序遍历
const root = {
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

const BFS = root => {
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let top = queue.shift();
    console.log(top.val);
    if (top.left) {
      queue.push(top.left);
    }
    if (top.right) {
      queue.push(top.right);
    }
  }
};

BFS(root);
