let minWindow = (s, t) => {
    let start = 0;
    let substringStart = 0;
    let minLength = Infinity;
    let hash = {};
    let matched = 0;

    for(let i = 0; i < t.length; i++) {
        let c = t[i];
        hash[c] = hash[c] ? hash[c] + 1 : 1;
    }

    for(let end = 0; end < s.length; end++) {
        let rightC = s[end];
        if(rightC in hash) {
            hash[rightC]--;
            if(hash[rightC] >= 0) matched++;
        }

        while(matched == t.length) {
            if(minLength > end - start + 1) {
                minLength = end - start + 1;
                substringStart = start;
            }

            let leftC = s[start];
            if(leftC in hash) {
                if(hash[leftC] >= 0) matched--;
                hash[leftC]++;
            }
            start++;
        }
    }

    if(minLength > s.length) return "";
    return s.substring(substringStart, substringStart + minLength);
    }
    
    console.log(minWindow("ADOBECODEBANC", "ABC")) //"BANC"
    
    //time - O(S + T)
    //space - O(S + T)
    //both could be simplified as O(N) but not technically correct