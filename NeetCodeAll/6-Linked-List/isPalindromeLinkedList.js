let isPalindrome = (head) => {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    let prev = null;
    let curr = slow;

    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let l1 = head;
    let l2 = prev;

    while(l2) {
        if(l1.val != l2.val) return false;
        l1 = l1.next;
        l2 = l2.next;
    }

    return true;
}