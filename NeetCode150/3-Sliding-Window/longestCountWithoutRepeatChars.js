let lengthOfLongestSubstring = (s) => {
    if(s.length == 0) return 0;
    if(s.length == 1) return 1;

    let left = 0;
    let longest = 0;
    let set = new Set();

    for(let i = 0; i < s.length; i++) {     //time O(N)
        while(set.has(s[i])) {
            set.remove(s[left]);
            left++;
        }
        set.add(s[i]);                      //space O(N)
        longest = Math.max(longest, i - left + 1);
    }
    return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbbb")) //1

//time - O(N)
//space - O(N)