let isUnique = (str) => {
let hash = {};
    for(let i = 0; i < str.length; i++) {       //time - O(N)
        let char = str[i];
        if(hash[char]) return false;
            hash[char] = 1;                     //space - O(N)
    }  
return true;
}

console.log(isUnique("water")); //true
console.log(isUnique("waterbottle")) //false 

//time  - O(N);
//space - O(N);