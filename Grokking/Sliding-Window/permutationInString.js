// Given a string and a pattern, 
// find out if the string contains any 
// permutation of the pattern. (has to be continuous substring)

// Permutation is defined as the re-arranging of the characters of the string.

let hasPermutation = (str, pattern) => {
    let hash = {};
    let start = 0;
    let distinctChars = 0;
    let matched = 0;

    for(let i = 0; i < pattern.length; i++) {
        let c = pattern[i];
        if(!hash[c]) {
            hash[c] = 0;
            distinctChars++;
        }
        hash[c]++;
    }

    for(let end = 0; end < str.length; end++) {
        let rightC = str[end];
        if(rightC in hash) {
            hash[rightC]--;
            if(hash[rightC] ==  0) matched++;
        }

        if(matched == distinctChars) {
            return true;
        }

        if(end >= pattern.length - 1) {
            let leftC = str[start];
                if(hash[leftC] == 0) matched--;
                hash[leftC]++;
                start++;
        }
    }
    return false;
}