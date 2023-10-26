// Given an array containing 0s and 1s, if you are allowed to 
// replace no more than ‘k’ 0s with 1s, find the length of the 
// longest contiguous subarray having all 1s.

let longestOnes = (arr, k) => {
    let maxOnesCount = 0;
    let start = 0;
    let max = 0;

    for(let end = 0; end < arr.length; end++) {
        if(arr[end]  == 1) maxOnesCount++;

        if(end - start - maxOnesCount + 1 > k) {
            if(arr[start] == 1) maxOnesCount--;
            start++;
        }

        max = Math.max(max, end - start + 1);
    }
    return max;
}