let sameTree = (p, q)  => {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val != q.val) return false;

    return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}