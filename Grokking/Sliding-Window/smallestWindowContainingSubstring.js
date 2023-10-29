// Given a string and a pattern, find the smallest substring in the given string which 
// has all the character occurrences of the given pattern.

let smallestSubstring = (str, pattern) => {
    let start = 0;
    let substringStart = 0;
    let minLength = Infinity;
    let matched = 0;
    let hash = {};

    for(let i = 0; i < pattern.length; i++) {
        let c = pattern[i];
        hash[c] = hash[c] ? hash[c] + 1 : 1;
    }

    for(let end = 0; end < str.length; end++){
        let rightC = str[end];
        if(rightC in hash) {
            hash[rightC]--;
            if(hash[rightC] >= 0) matched++;
        }

        while(matched == pattern.length){

            if(minLength > end - start + 1) {
                minLength = end - start + 1;
                substringStart = start;
            }

            let leftC = str[start];
            start++;
            if(leftC in hash) {
                if(hash[leftC] == 0) matched--;
                hash[leftC]++;
            }
        }
    }

    if(minLength > str.length) return "";
    return str.substring(substringStart, substringStart + minLength);
}