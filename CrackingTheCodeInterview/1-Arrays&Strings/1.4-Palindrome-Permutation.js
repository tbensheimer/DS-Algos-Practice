let isPalindromePermutation = (str) => {
    let hash = {};
    let charCount = 0;

    for(let i = 0; i < str.length; i++)  {      //time - O(N)
        let c = str[i];     
        if(c == " " || Number.isInteger(parseInt(c))) continue;
        if(hash[c]) {
            delete hash[c];
        } else  {
            hash[c] = true;
        }
        charCount++;
    }

    if(charCount % 2 == 0) {
        return Object.keys(hash).length == 0;
    } else {
        return Object.keys(hash).length == 1;
    }
}

console.log(isPalindromePermutation("tacocat")) //true
console.log(isPalindromePermutation("tac333o cat")) // true
console.log(isPalindromePermutation("t2a3v  aft")) // false

//time - O(N)
//space - O(N)