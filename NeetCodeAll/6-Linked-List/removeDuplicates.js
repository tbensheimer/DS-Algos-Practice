let removeDuplicates = (head) => {
    let hash = {};
    let curr = head;
    let prev = null;

    while(curr != null) {

        if(curr.val in hash) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            hash[curr.val] = 1;
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
}