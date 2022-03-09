//真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
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

// flag法
const detectCycle = head => {
  while (head) {
    if (head.flag) return head;
    head.flag = true;
    head = head.next;
  }
  return null;
};

// 快慢指针法
const detectCycle1 = head => {
  let slow = head;
  let fast = head;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow.next;
  }
  return null;
};

// console.log(detectCycle(l1));
console.log(detectCycle1(l1));
