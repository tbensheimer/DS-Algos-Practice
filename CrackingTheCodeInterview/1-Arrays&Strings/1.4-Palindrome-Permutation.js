let isPalindromePermutation = (str) => {
    let charMap = new Map();
    let stringCount = 0;
    for(let i = 0; i < str.length; i++) {   //time - O(N)
        if(Number.isInteger(parseInt(str[i])) || str[i] == " ") { 
            //skips numbers and spaces and doesn't count as part of string length
           continue;
        }
        if(charMap.get(str[i])) {
            charMap.delete(str[i])
        } else {
            charMap.set(str[i], 1)          //space - O(N)
        }
            stringCount++;
    }
    console.log(charMap)
    if((stringCount % 2 == 0 && charMap.size == 0) ||
       (stringCount % 2 == 1 && charMap.size == 1)) {
        return true;
       }
    else {
        return false;
    }
}

console.log(isPalindromePermutation("tacocat")) //true
console.log(isPalindromePermutation("tac333o cat")) // true
console.log(isPalindromePermutation("t2a3v  aft")) // false

//time - O(N)
//space - O(N)