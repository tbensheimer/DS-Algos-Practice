let isValid = (s) => {
    let stack = [];
    for(let i = 0; i < s.length; i++) {     //time O(N)
        let c = s[i];

        switch(c) {                         //space O(N)
            case "(": stack.push(")");
            break;
            case "[": stack.push("]");      //time O(1)
            break;
            case "{": stack.push("}");
            break;
            default:
            if(c !== stack.pop()) return false;
            break;
        }
    }
    return stack.length == 0;
};

console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false

//time O(N);
//space O(N);