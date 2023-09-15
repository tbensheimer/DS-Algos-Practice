let topKFrequent = (nums, k) => {
    let hash = {};
    let arr = [];

    for(let i = 0; i < nums.length; i++) {      //time - O(N)
        let num = nums[i];
        if(hash[num]) {
            hash[num]++;                        //space -  O(N)
        } else {
            hash[num] = 1;
        }
    }

    let sortedFreqAsc = Object.entries(hash).sort((a, b)  => a[1] - b[1]);    //time/space - O(N) ??  
    while(arr.length != k) {
        let mostFreq = sortedFreqAsc.pop();
        arr.push(mostFreq[0]);
    }
    return arr;
}

console.log(topKFrequent([1,1,1,2,2,3], 2)) //[1,2]
console.log(topKFrequent([1,1,1,2,2,3], 1)) //[1]

//time - O(N);
//space -  O(N);
