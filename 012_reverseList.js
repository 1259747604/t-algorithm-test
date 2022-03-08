// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
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
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null
              }
            }
          }
        }
      }
    }
  }
};

// pre 1 cur 2... next 3...
// pre 2,1 cur 3... next 4...
//...
// 一刀断开第一个节点，第一个后面就没东西了，此时第一个赋值pre, 第二个成为了cur ，如此往复
// 1->2->3
// => 2->3
//    1->null
// => 3
//    2->1->null
// => 3->2->1

const reverseList = head => {
  let pre = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = pre; //断开接上上一个 如 1->null 2->1->null
    pre = cur; // 重新赋值翻转
    cur = next; //重新赋值当前节点
  }

  return pre;
};

console.log(JSON.stringify(reverseList(l1)));
