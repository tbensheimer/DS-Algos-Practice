let sameTree = (p, q)  => {

    //DFS
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val != q.val) return false;

    return sameTree(p.left, q.left) && sameTree(p.right, q.right);
    ///

    //BFS
    // const stack = [p, q];
    // while(stack.length) {
    //     let n1 = stack.shift();
    //     let n2 = stack.shift();

    //     if(!n1 && !n2) continue;
    //     if(!n1 || !n2 || n1.val != n2.val) return false;
    //     stack.push(n1.left, n2.left, n1.right, n2.right);
    // }
    // return  true;

    //
}