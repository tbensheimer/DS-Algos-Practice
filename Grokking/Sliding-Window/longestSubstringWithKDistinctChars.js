// Given a string, find the length of the longest substring in 
// it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

let longestDistinct = (str, k) => {
    let hash = {};
    let start = 0;
    let longest = 0;

    for(let end = 0; end < str.length; end++) {
        let rightC = str[end];
        if(!(rightC in hash)) hash[rightC] = 0;
        hash[rightC]++;

        while(Object.keys(hash).length > k) {
            let leftC = str[start];
            hash[leftC]--;
            if(hash[leftC] == 0) delete hash[leftC];
            start++;
        }

        longest = Math.max(longest, end - start + 1);
    }
    return longest;
}