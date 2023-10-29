let minSubSum = (target, nums) => {
    let start = 0;
    let sum = 0;
    let min = Infinity;

    for(let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while(sum >= target) {
            min = Math.min(min, end - start + 1);
            sum -= nums[start];
            start++
        }
    }
    return min == Infinity ? 0 : min;
}