let containsDuplicate = (nums, k) => {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        let c = nums[i];
        if(c in hash) {
            if(Math.abs(hash[c] - i) <= k) return true;
        }
        hash[c] = i;
    }
    return false;
}

//time - O(N);
//space - O(N);