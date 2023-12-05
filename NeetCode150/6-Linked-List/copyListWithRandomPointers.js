let copyListWithRandomPointers = (head) => {
    let curr = head;

    //clone nodes every other node with no random pointers
    while(curr) {
        let copy = new Node(curr.val, curr.next, null);
        curr.next = copy;
        curr = curr.next.next;
    }

    //fill in random pointers for every cloned node
    curr = head;
    while(curr) {
        curr.next.random = curr.random ? curr.random.next : null;
        curr = curr.next.next;
    }

    //extract cloned list with help of original list
    curr = head;
    let result = head.next;
    let temp = result;

    while(curr) {
        curr.next = curr.next.next;
        curr = curr.next;

        temp.next = temp.next ? temp.next.next : null;
        temp = temp.next;
    }

    return result;
}