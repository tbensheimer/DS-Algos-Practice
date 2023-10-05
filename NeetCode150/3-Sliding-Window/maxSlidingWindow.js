let maxSlidingWindow = (nums, k) => {
    let res = [];
    let stack = [];

    for(let i = 0; i < nums.length; i++) {
        while(stack && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }

        stack.push(i);

        //if first element out of sliding window, remove first element
        if(q[0] == i - k) q.shift();

        //if window has k elements, add highest value
        if(q[0] >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // [3,3,5,5,6,7]

//time = O(N)
//space = O(K)