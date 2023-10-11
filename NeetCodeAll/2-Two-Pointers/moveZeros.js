let moveZeros = (nums) => {
    let left = 0;
    let right = 1;

    while(right <= nums.length - 1) {
        if(nums[left] != 0) {
            left++;
            right++;
        } else {
            if(nums[right] != 0) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right++;
        }
    }
}

console.log(moveZeros([0,1,0,3,12])) //[1,3,12,0,0]

//time - O(N)
//space - O(1);