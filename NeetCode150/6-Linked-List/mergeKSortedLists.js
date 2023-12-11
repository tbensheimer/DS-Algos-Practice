let merge = (lists) => {
    if(lists.length == 0) return null;

    while(lists.length > 1) {

        let a = lists.shift();
        let b = lists.shift();

        let merged = mergeList(a, b);
        lists.push(merged);
    }
    return lists[0];
}

let mergeList = (one, two) => {
    let dummy = new ListNode();
    let temp = dummy;

    while(one && two) {
        if(one.val < two.val) {
            temp.next = one.val;
            one = one.next;
        } else {
            temp.next = two.val;
            two = two.next;
        }
        temp = temp.next;
    }

    temp.next = a || b;

    return dummy;
}