var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    let depth = function(root) {
        if(!root) return 0;
        let left = depth(root.left);
        let right = depth(root.right);
        diameter = Math.max(diameter, left + right);
        return longerSide = Math.max(left, right) + 1;
    }

    depth(root);
    return diameter;
    };