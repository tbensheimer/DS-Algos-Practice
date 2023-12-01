let intersection = (listA, listB)  =>  {
    let set = new Set();
    let one = listA;
    let two  = listB;

    while(one) {
        set.add(one);
        one = one.next;
    }

    while(two) {
        if(set.has(two))  return two;
        two = two.next;
    }

    return null;
}