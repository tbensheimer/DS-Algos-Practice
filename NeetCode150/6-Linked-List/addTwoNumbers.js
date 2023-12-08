let addTwo = (l1, l2) => {
    let res = new ListNode();
    let temp = res;
    let sum = 0;
    let carry = 0;

    while(l1 || l2) {
        sum = 0;

        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2)  {
            sum  += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        temp.next = new ListNode(sum);
        temp = temp.next;

    }

    if(carry > 0) {
        temp.next = new ListNode(carry);
    }

    return res.next;
}