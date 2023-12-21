//BFS

function walkBFS(root){
    if(root === null) return
  
    const queue = [root]
    while(queue.length){
        const item = queue.shift()
        // do something
        console.log(item)
  
        if(item.left) queue.push(item.left)
        if(item.right) queue.push(item.right)
     }
  }

  function walkBFSInNestedArray(root){
    if(root === null) return
  
    const queue = [root], ans = []
  
    while(queue.length){
        const len = queue.length, level = []
        for(let i = 0; i < len; i++){
            const item = queue.shift()
            level.push(item)
            if(item.left) queue.push(item.left)
            if(item.right) queue.push(item.right)
         }
         ans.push(level)
     }
    return ans
  }

  //DFS

  function walkPreOrder(root){
    if(root === null) return
  
    // do something here
    console.log(root.val)
  
    // recurse through child nodes
    if(root.left) walkPreOrder(root.left)
    if(root.right) walkPreOrder(root.right)
  }

  function walkPreOrder(root){
    if(root === null) return
  
    const stack = [root]
    while(stack.length){
        const item = stack.pop()
  
        // do something
        console.log(item)
  
        // Left child is pushed after right one, since we want to print left child first hence it must be above right child in the stack
        if(item.right) stack.push(item.right)
        if(item.left) stack.push(item.left)
     }
  }

  function walkInOrder(root){
    if(root === null) return
  
    if(root.left) walkInOrder(root.left)
  
   // do something here
    console.log(root.val)
  
    if(root.right) walkInOrder(root.right)
  }

  function walkInOrder(root){
    if(root === null) return
  
    const stack = []
    let current = root
  
    while(stack.length || current){
        while(current){
           stack.push(current)
           current = current.left
        }
        const last = stack.pop()
  
        // do something
        console.log(last)
  
        current = last.right
     }
  }

  function walkPostOrder(root){
    if(root === null) return
  
    if(root.left) walkPostOrder(root.left)
    if(root.right) walkPostOrder(root.right)
  
    // do something here
    console.log(root.val)
  
  }

  function walkPostOrder(root){
    if(root === null) return []
  
    const tempStack = [root], result = []
  
    while(tempStack.length){
        const last = tempStack.pop()
  
        result.push(last)
  
        if(last.left) tempStack.push(last.left)
        if(last.right) tempStack.push(last.right)
      }
  
      return result.reverse()
  }