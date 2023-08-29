let isAnagram = (s, t) => {
    let hash = {};
    if(s.length != t.length) return false;
    for(let i = 0; i < s.length; i++) {     //time - O(N)
        let c = s[i];
        if(hash[c]) {
            hash[c]++;                      //space - O(N)
        } else {
            hash[c] = 1;
        }
    }
    for(let j = 0; j < t.length; j++) {     //time - O(N)
        let c = t[j];       
        if(hash[c] && hash[c] > 0) {        //space - O(N)
            hash[c]--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("trent", "ttnre")) // true
console.log(isAnagram("anagram", "angmran")) //false

//time - O(N);
//space = O(N);