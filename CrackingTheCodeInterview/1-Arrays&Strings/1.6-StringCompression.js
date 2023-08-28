let stringCompression = (str) => {
    let out = "";
    let count = 1;

    for(let i = 0; i < str.length; i++) {       //time - O(N)
        let curr = str[i];
        let next = str[i + 1];
        if(curr == next) {
            count++;
        } else {
            out += curr + count;
        }
    }
    return (out.length == str) ? str : out;
}

console.log(stringCompression("aaAAaa")); //aaAAaa
console.log(stringCompression("aaaBBcccc")) //a3B2c4

// time - O(N)
//space - O(1)