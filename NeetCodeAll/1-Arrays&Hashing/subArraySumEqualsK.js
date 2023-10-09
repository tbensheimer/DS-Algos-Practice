let subarraySum = (nums, k) => {
    let count = 0;
    let hash = {0: 1};
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if(hash[sum - k] != undefined) {
            count += hash[sum - k];
        }
        hash[sum] = hash[sum] ? hash[sum] + 1 : 1;
    }

    return count;
}

console.log(subarraySum([1, 2, 3], 3)) //2
//time - O(N);
//space - O(N);
