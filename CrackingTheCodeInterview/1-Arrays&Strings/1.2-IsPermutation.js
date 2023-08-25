let isPermutation = (s1, s2) => {
    if(s1.length != s2.length) return false;
    let hash = {};
    for(let i = 0; i < s1.length; i++) {        //time - O(N)
        let char = s1[i];
        hash[char] ? hash[char]++ : hash[char] = 1; //space - O(N)
    }
    for(let j = 0; j < s2.length; j++) {        //time - O(N)
        let char = s2[j];
        if(hash[char] && hash[char] == 0) return false;
        hash[char]--;                           //space - O(N)
    }
    return true;
}

console.log(checkPermutation("string", "gnirts")); //true
console.log(checkPermutation("water", "watrr")); //false

//time - O(N + N) => O(N)
//space - O(N + N) => O(N)