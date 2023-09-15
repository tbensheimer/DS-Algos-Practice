let twoSum = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;
    while(i < j) {                      //time - O(N)
        let value = nums[i] + nums[j];
        if(value == target) {
            return [i + 1, j + 1];
        } else if(value > target) {
            j--;
        } else {
            i++;
        }
    }
}

console.log(twoSum([3, 8, 34, 45], 53)) //[2, 4]

//time - O(N);
//space = O(1);