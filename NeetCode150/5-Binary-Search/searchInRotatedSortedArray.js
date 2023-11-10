let searchRotatedSorted = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = parseInt((left + right) / 2);
        let curr = nums[mid];

        if(curr == target) return mid;

        if(nums[left] <= curr) {
            //left is sorted

            if(nums[left] <= target && target <= nums[mid]) {
                //target on left
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        } else {
            //right is sorted
            if(curr <= target && target <= nums[right]) {
                //target in right
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}