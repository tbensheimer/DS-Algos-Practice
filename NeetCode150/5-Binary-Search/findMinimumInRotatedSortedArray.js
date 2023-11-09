let minimum = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while(left < right) {
        let mid = parseInt((left + right) / 2);

        if(nums[mid + 1] != undefined && nums[mid] > nums[mid + 1]) return nums[mid + 1];

        if(nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}