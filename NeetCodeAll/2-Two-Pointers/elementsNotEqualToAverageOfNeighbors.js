let rearrangeArray = (nums) => {
    nums.sort((a, b) => a - b);
    let res  = [];
    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        res.push(nums[l]);
        res.push(nums[r]);
        l++;
        r--;
    }
    if(l == r) res.push(nums[left]);
    return res;
}

console.log(rearrangeArray([[6,2,0,9,7]])) //[9,7,6,2,0] **MULTIPLE answers accepted**

//time - O(N);
//space - O(N);