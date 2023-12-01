let addTwo = (l1, l2) => {
    let res = new ListNode();
    let temp =  res;
    let carry = 0;

    while(l1 || l2) {
        let a = l1 && l1.val;
        let b = l2 && l2.val;
        let carry = Math.floor(sum/10);
        
        temp.next = new ListNode(sum%10);

        if(a) a = a.next;
        if(b) b = b.next;
        temp = temp.next;
    }

    if(carry > 0) temp.next = new ListNode(carry);

    return res.next;
}