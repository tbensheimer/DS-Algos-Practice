let checkInclusion = (s1, s2) => {
    if(s1.length > s2.length) return false;

    let hash = {};
    let length = s1.length;
    let left = 0;
    let right = 0;

    for(let i = 0; i < s1.length; i++) {        //time O(N)
        let c = s1[i];
        hash[c] = hash[c] ? hash[c] + 1 : 1;    //space O(N)
    }

    while(right < s2.length) {                  //time O(N)
        if(hash[s2[right]] > 0) length--;
        if(length == 0) return true;
        hash[s2[right]]--;
        right++;

        if(right - left == s1.length) {
            if(hash[s2[left]] >= 0) length++;
            hash[s2[left]]++;
            left++;
        }
    }
    return false;
}

console.log(checkInclusion("ab", "eidbaooo")) //true

//time - O(N);
//space - O(N);