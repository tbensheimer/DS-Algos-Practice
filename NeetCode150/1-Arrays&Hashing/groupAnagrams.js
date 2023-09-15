let groupAnagrams = (strs) => {
    let map = new Map();
    strs.forEach(str => {                   //time - O(N);
        let sorted = str.split("").sort().join("");     //time - O(K)
        if(map.has(sorted)) {
            map.set(sorted, [...map.get(sorted), str]); //space - O(N)
        } else {
            map.set(sorted, [str]);
        }
    });
    return Array.from(map.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]

//time - O(N * K)
//space - O(N)