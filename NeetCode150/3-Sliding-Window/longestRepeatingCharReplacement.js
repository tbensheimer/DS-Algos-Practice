let charReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    let hash = {};

    while(right < s.length) {       //time O(N)
        let c = s[right];   
        hash[c] = hash[c] ? hash[c] + 1 : 1;    //space O(N)

        //max frequency matters in getting window size
        if(hash[c] > maxCharCount) maxCharCount = hash[c];

        //window size - max freq > k means we used up all the replacements (not valid window anymore)
        if(right - left + 1 - maxCharCount > k) {
            hash[s[left]]--;
            left++;
        }
        right++;
    }
    //return window size since it already includes k
    return right - left;
}

console.log(charReplacement("AABABBA", 1)) //4

//time - O(N);
//space - O(N);