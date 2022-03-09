// 真题描述：给定一个链表，判断链表中是否有环。
let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};
l1.next.next.next.next.next = l1.next;

const hasCycle = head => {
  while (head) {
    if (head.flag) return true;
    head.flag = true;
    head = head.next;
  }
  return false;
};

console.log(hasCycle(l1));
