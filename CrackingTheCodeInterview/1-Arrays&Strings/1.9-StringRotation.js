let isRotation = (s1, s2) => {
    if(!s1 || !s2) return false;
    if(s1.length == s2.length) return false;
    return (s1 + s1).includes(s2);
}

console.log(isRotation("waterbottle", "erbottlewat")) // true;

//time - O(N) ??? since includes loops the string?
//space - O(1)