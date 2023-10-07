let sortColors = (nums) => {
    let zero = 0;
    let one = 0;
    let two = 0;

    for(let n of nums) {
        n == 0 ? zero++ : n == 1 ? one++ : two++;
    }

    for(let i = 0; i < nums.length; i++) {
        
        i < zero ? (nums[i] == 0) : i < zero + one ? (nums[i] == 1) : (nums[i] == 2);
    }
    return nums;
}

console.log(sortColors([2, 1, 1, 1, 0, 0, 2, 1]))   //[0, 0, 1, 1, 1, 1, 2, 2]

//time - O(N);
//space - O(N);