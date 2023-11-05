let smallestNum = (num, k) => {
    let stack = [];

    for(let i = 0; i < num.length; i++) {
        while(stack.length && k > 0 && num[i] < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(num[i])
    }

    while(k > 0) {
        stack.pop();
        k--;
    }

    while(stack.length && stack[0] == "0") {
        stack.shift();
    }

    return stack.join('') || "0";
}