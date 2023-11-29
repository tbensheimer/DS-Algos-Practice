let removeElementsInLinkedList = (head, val) => {
    if(!head) return head;
    let curr = head;

    while(curr && curr.next) {
        if(curr.next.val == val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head.val == val ? head.next : head;
}