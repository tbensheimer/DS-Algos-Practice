//Iteratively

let InOrder = (root) => {
    if(!root) return null;

    let stack = [];
    let current = root;

    while(stack.length || current) {
        while(current) {
            stack.push(current);
            current = current.left;
        }

        let item = stack.pop();
        //do something with item;

        current = item.right;
    }

}

/// Recursive

let InOrder2 = (root) => {
    if(!root) return null;

    if(root.left) InOrder2(root.left);

    // do something with root

    if(root.right) InOrder2(root.right);
}