let twoSum = (nums, target) => {
    let map = {};
    for(let i = 0; i < nums.length; i++) {      //time - O(N)
        let diff = target - nums[i];
        if(diff in map) {
            return [i, map[diff]];
        }
        map[nums[i]] = i;                       //space - O(N)
    }
}

console.log(twoSum([1, 2, 3, 4, 5], 4)) // [0, 2]

//time - O(N);
//space - O(N);
