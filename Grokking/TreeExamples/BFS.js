
let BFS = (root) => {
    if(!root) return null;

    let queue = [root];

    while(queue.length) {
        let item = queue.shift();

        //do something with item (such as push to array)

        if(item.left) queue.push(item.left);
        if(item.right) queue.push(item.right);
    }

    //do more something
}

//return array of array (each inner array is a level in tree)

let BFSarray = (root) => {
    if(!root) return [];

    let queue = [root];
    let result = [];

    while(queue.length) {
        let level = [];
        let length = queue.length;

        for(let i = 0; i < length; i++) {
            let item = queue.shift();
            level.push(item);
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
        }

        result.push(level);
    }

    return result;
}