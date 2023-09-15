let productOfArrayExceptSelf = (nums) => {
    let result = [];
    let prefix = 1;
    let postfix = 1;

    for(let i = 0; i < nums.length; i++) {      //time - O(N)
        result[i] = prefix;
        prefix *= nums[i];                      //space - O(N)
    }

    for(let j = nums.length - 2; j >= 0; j--) {     //time - O(N)
        postfix *= nums[j + 1];
        results[j] *= postfix;                      //space - O(N)
    }
    return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]

//time - O(N)
//space - O(N)