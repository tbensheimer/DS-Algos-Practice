let isUnique = (str) => {
let hash = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(hash[char]) {
            return false;
        } else {
            hash[char] = 1;
        }
    }
return true;
}

console.log(isUnique("water")); //true
console.log(isUnique("waterbottle")) //false 