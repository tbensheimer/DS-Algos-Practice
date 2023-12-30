let invertBinaryTree = (root) => {
    if(!root) return null;

    let queue = [root];

    while(queue.length) {
        let item = queue.shift();

        [item.left, item.right] = [item.right, item.left];

        if(item.left) queue.push(item.left);
        if(item.right) queue.push(item.right);
    }

    return root;
}