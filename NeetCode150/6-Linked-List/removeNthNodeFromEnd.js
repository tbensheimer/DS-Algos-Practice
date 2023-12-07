let removeNthNodeFromEnd = (head, n) => {
    let curr = head;
    let count = 0;

    while(curr) {
        count++;
        curr = curr.next;
    }

    let removeAt = count - n;

    if(removeAt == 0) return head.next;

    count = 0;
    curr = head;
    let prev = new ListNode(0);

    while(curr) {
        if(count == removeAt) {
            prev.next = curr.next;
        }
        
        count++;
        prev =  curr;
        curr = curr.next;
    }

    return head;
}