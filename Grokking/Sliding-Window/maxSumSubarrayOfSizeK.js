// Given an array of positive numbers and a positive number 'k,' 
// find the maximum sum of any contiguous subarray of size 'k'.

let maxAvg = (nums, k) => {
    let max = -Infinity;
    let windowSum = 0;
    let start = 0;

    for(let end = 0; end < nums.length; end++) {
        windowSum += nums[end];

        if(end >= k - 1) {
            max = Math.max(max, windowSum);
            windowSum -= nums[start];
            start++;
        }
    }
    return max;
}