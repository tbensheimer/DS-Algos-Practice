let containsDuplicate = function(nums) {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {          //time - O(N)
        let c = nums[i];
        if(hash[c]) return true;
            hash[c] = 1;                            //space - O(N)
    }
    return false;
};

console.log(containsDuplicate("water")); //false
console.log(containsDuplicate("waterbottle")) //true

//time  - O(N);
//space - O(N);