let findDuplicate = (nums) => {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]  in hash) return nums[i];

        hash[nums[i]] = 1;
    }
    return null;
}