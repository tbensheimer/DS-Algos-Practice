let minWindow = (s, t) => {
    if(t.length > s.length) return "";
    
    let hash = {};
    
    for(let i = 0; i < t.length; i++) {         //time O(N) for T
        let c = t[i];
        hash[c] = hash[c] ? hash[c] + 1 : 1;    //space O(N) for T
    }
    
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(hash).length;
    let substring = "";
    
    while(right < s.length) {                   //time O(N) for S
        let rightChar = s[right];
        hash[rightChar]--;
        if(hash[rightChar] == 0) neededLength--;    //space O(N) for s
    
        while(neededLength == 0) {
            if(substring == "" || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
    
            let leftChar = s[left];
            if(hash[leftChar] == 0) neededLength++;
            hash[leftChar]++;
    
            left++;
        }
        right++;
    }
    return substring;
    }
    
    console.log(minWindow("ADOBECODEBANC", "ABC")) //"BANC"
    
    //time - O(S + T)
    //space - O(S + T)
    //both could be simplified as O(N) but not technically correct