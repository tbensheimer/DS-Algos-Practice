// Given a string with lowercase letters only, 
// if you are allowed to replace no more than ‘k’ 
// letters with any letter, find the length of the longest 
// substring having the same letters after replacement.


let longestSub = (str, k) => {
    let hash = {};
    let start = 0;
    let maxCharCount = 0;
    let max;

    for(let end = 0; end < str.length; end++) {
        let rightC = str[end];
        if(!hash[rightC]) hash[rightC] = 0;
        hash[rightC]++;

        maxCharCount = Math.max(maxCharCount, hash[rightC]);

        if(end - start - maxCharCount + 1 > k) {
            let leftC = str[start];
            hash[leftC]--;
            start++;
        }

        max = Math.max(max, end - start + 1);

    }

    return max;
}