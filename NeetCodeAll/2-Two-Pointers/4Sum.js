let fourSum = (nums, target) => {
    let res = [];
    nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {

            let f = nums[i];
            let s = nums[j];
            let l  = j + 1;
            let r = nums.length - 1;

            while(l < r) {
                let sum = f + s + nums[l] + nums[r];
                if(sum < target) {
                    left++
                } else if (sum > target) {
                    right--;
                } else {
                    res.push([f, s, nums[l], nums[r]]);
                    while(nums[l] == nums[l + 1]) l++;
                    while(nums[r] == nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }
            while(nums[j] == nums[j + 1]) j++;
        }
        while(nums[i] == nums[i + 1]) i++;
    }
    return res;
}

console.log(fourSum([1,0,-1,0,-2,2], 0)) //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

//time - O(N^2)
//space - O(N);