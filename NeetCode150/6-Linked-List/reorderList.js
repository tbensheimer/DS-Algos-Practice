let reorder = (head) => {
    let fast = head;
    let slow =  head;

    while(fast && fast.next)  {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;

    while(slow) {
        let next  = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let l1 = head;
    let l2 = prev;

    while(l2 && l2.next) {
        l1.next = new ListNode(l2.val, l1.next);

        l1 = l1.next  ? l1.next.next : null;
        l2 = l2.next;
    }

    return head;
}