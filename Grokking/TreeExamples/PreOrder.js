let PreOrder = (root) => {
    if(!root) return null;

    let stack = [root];

    while(stack.length) {
        let item = stack.pop();

        //do something with item

        if(item.right) stack.push(item.right);
        if(item.left) stack.push(item.left);
    }

    //do more something
}