//Iteratively
let postOrder = (root) => {
    if(!root) return null;

    let stack = [root];
    let result = [];

    while(stack.length) {
        let item = stack.pop();

        result.push(item);

        if(item.left) stack.push(item.left);
        if(item.right) stack.push(item.right)
    }

    return result.reverse();
}



//Recursive

let postOrder2 = (root) => {
    if(!root) return null;

    if(root.left) postOrder2(root.left);
    if(root.right) postOrder2(root.right);

    //do something with root
}