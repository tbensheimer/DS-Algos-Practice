let containsDuplicate = function(nums) {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        let c = nums[i];
        if(hash[c]) {
            return true;
        } else {
            hash[c] = 1;
        }
    }
    return false;
};