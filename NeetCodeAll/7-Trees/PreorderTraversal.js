let preorderTraversal = (root) => {
    ////Iterative
    // if(!root) return [];
    // let result = [];
    // let stack = [root];

    // while(stack.length) {
    //     let item = stack.pop();
    //     result.push(item.val);

    //     if(item.right) stack.push(item.right);
    //     if(item.left) stack.push(item.left);
    // }
    // return result;

    ////Recursive
    if(!root) return [];
    let result = [];

    function dfs(node) {
        result.push(node.val);

        if(node.left) dfs(node.left);
        if(node.right) dfs(node.right);
    }

    dfs(root);
    return result;
}