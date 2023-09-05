let longestConsecutive = (nums) => {
    let longestLength = 0;
    let count = 1;
    nums = nums.sort((a, b) => a - b);           //time - O(N) ??

    for(let i = 0; i < nums.length; i++) {      //time - O(N)
        let char = nums[i];
        if(nums[i + 1] == char + 1) {
            count++;
        } else if(nums[i + 1] == char) {
            continue;
        } else {
            if(count > longestLength) longestLength = count;
            count = 1;
        }
    }
    return longestLength;
}

console.log(longestConsecutive([4, 3, 3, 3, 2, 4, 5, 1])) //5
console.log(longestConsecutive([3, 9, 7, 10])) //2

//time - O(N);
//space - O(1);
