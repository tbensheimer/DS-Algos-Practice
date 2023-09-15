let validPalindrome = (str) => {
    let filtered = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    for(let i = 0, j = filtered.length - 1; i < j; i++, j--) {  //time - O(N)
            if(filtered[i] != filtered[j]) return false;
    }
    return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama")) //true
console.log(validPalindrome("race a car")) //false

//time - O(N);
//space - O(1); ??