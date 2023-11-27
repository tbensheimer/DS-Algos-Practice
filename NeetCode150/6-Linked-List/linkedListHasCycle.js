let hasCycle = (head) => {
    let fast = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        head = head.next;
        if(fast == head) return true;
    }
    return false;
}