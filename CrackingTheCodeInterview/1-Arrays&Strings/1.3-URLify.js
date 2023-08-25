let URLify = (str, num) => {
    let out = "";
    for(let i = 0; i < num + 1; i++)                //time - O(N)
    {
        if(str[i] && str[i] == " ") out += "%20";   //space - O(N)
        if(str[i] && str[i] != " ") out += str[i];  //space - O(N)
        if(!str[i]) out += "%20";                   //space - O(N)
    }
    return out;
}

console.log(URLify("The walking dead", 8)) //"The%20walk"
console.log(URLify("water", 7)) //"water%20%20"

//time - O(N)
//space - O(N + N + N) => O(N)