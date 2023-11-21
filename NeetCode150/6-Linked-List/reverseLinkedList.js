var reverseList = function(head) {
    // initialize prev and next pointers to NULL
let prev = null;
let next = null;
// set current pointer to the head node
let curr = head;

// while the current pointer is not NULL
while (curr !== null) {
    // set the next pointer to the next node in the list
    next = curr.next;
    // reverse the current node's pointer to point to
    // the previous node
    curr.next = prev;
    // set the previous pointer to the current node
    prev = curr;
    // move the current pointer to the next node
    curr = next;
}

// set the head pointer to the last node, which is the new
// first node after reversal
head = prev;
// return the new head pointer
return head;
};