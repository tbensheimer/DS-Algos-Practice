let oneAway = (s1, s2) =>  {
    let edits = 1;
    let long = s1.length > s2.length ? s1 : s2;
    let short = s1.length > s2.length ? s2 : s1;
    if(long.length - short.length > edits) return false;        //time - O(N)

    for(let i = 0, j = 0; i < long.length || j < long.length; i++, j++) {
        let char1 = long[i];
        let char2 = short[j];
        if(char1 != char2) {
            edits--;
            if(edits < 0) return false;
            if(long[i + 1] == char2) i++;
        }
    }
    return true;
}

console.log(oneAway("pale", "ple")) //true
console.log(oneAway("pale", "bake")) //false;

//time - O(N);
//space - O(1);