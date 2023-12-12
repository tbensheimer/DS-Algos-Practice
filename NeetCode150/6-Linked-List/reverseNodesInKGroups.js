let reverse = (head, k) => {
    let stack = [];
    let dummy = new ListNode();
    let temp = dummy;

    while(head)  {
        for(let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next;
        }

        if(stack.length == k) {
            while(stack.length > 0) {
            temp.next = stack.pop();
            temp = temp.next;
            }
            temp.next = head;
        }
    }

    return dummy.next;
}