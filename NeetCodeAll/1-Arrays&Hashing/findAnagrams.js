let findAnagrams = (s, p) => {
    let res = [];
    let hash = {};

    for(let i = 0; i < p.length; i++) {
        hash[p[i]] = hash[p[i]] ? hash[p[i]] + 1 : 1;
    }

    let left = 0;
    let right = 0;

    while(right < s.length) {
        if(hash[s[right]] > 0) {
            hash[s[right]]--;
            if(right - left + 1 == p.length) res.push(left);
            right++;
        } else {
            if(hash[s[left]] != undefined) hash[s[left]]++;
            left++;
            if(left > right) right = left;
        }
    }
    return res;
}

console.log(findAnagrams("cbaebabacd", "abc")) //[0, 6]

//time - O(N);
//space - O(P);