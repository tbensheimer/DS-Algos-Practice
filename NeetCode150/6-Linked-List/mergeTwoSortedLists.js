let merge = (list1, list2) => {
    let mergedList = new ListNode();
    let temp = mergedList;
    let one = list1;
    let two = list2;

    while(one && two) {

        if(one.val < two.val) {
            temp.next = one;
            one = one.next;
        } else {
            temp.next = two;
            two = two.next;
        }
        temp = temp.next;
    }

    if(one) temp.next = one;
    if(two) temp.next = two;

    return mergedList.next;
}