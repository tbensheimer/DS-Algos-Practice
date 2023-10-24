// Given an array, find the average of each subarray of ‘K’ 
// contiguous elements in it.

let findAvgs = (nums, k)  => {
    let res = [];
    let windowSum = 0;
    let start = 0;

    for(let end = 0; end < nums.length; end++) {
        windowSum += nums[end];
        
        if(end >= k - 1) {
            res.push(windowSum / k);
            windowSum -= nums[start];
            start++;
        }
    }
    return res;
}