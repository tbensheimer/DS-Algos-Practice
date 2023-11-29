let findMiddleNode = (head) => {
    let fast = head;

    while(fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
    }
    return head;
}