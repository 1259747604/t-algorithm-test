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
// 先序
function preOrder(root) {
  if (!root) return;
  console.log('当前打印:', root.val);
  preOrder(root.left);
  preOrder(root.right);
}
// 中序
function inOrder(root) {
  if (!root) return;
  inOrder(root.left);
  console.log('当前打印:', root.val);

  inOrder(root.right);
}
// 后序
function postOrder(root) {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log('当前打印:', root.val);
}
preOrder(root);
inOrder(root);
postOrder(root); 
