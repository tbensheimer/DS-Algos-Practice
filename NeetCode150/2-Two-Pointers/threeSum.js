let threeSum = (nums) => {
    let results = [];
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        let c = nums[i];
        if(c > 0) break;
        if(i > 0 && c == nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while(l < r) {
            let sum = c + nums[l] + nums[r];
            if(sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                results.push([c, nums[l], nums[r]]);
                l++;
                r--;
                while(nums[l] == nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return results;
}

console.log(threeSum([-1,0,1,2,-1,-4])) //[[-1,-1,2],[-1,0,1]]

//time - O(N^2)
//space - O(N) ??