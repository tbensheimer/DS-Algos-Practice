// Given an array of positive integers and a number ‘S,’ 
// find the length of the smallest contiguous subarray whose 
// sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

let smallestSub = (nums, s) => {
    let min = Infinity;
    let windowSum = 0;
    let start = 0;

    for(let end = 0; end < nums.length; end++) {
        windowSum += nums[end];
        while(windowSum >= s) {
            min = Math.min(min, end - start + 1);
            windowSum -= nums[start];
            start++;
        }
    }
    return min == Infinity ? 0 : min;
}