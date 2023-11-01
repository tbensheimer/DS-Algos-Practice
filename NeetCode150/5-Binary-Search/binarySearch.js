let binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while(start <= end) {
        mid = Math.round((start + end) / 2);

        if(nums[mid] == target) return mid;

        if(nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return - 1;
}