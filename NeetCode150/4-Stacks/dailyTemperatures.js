let dailyTemperatures = (temps) => {
    let res = new Array(temps.length).fill(0);
    let stack = [];

    for(let i = 0; i < temps.length; i++) {
    while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
        let idx = stack.pop();
        res[idx] = i - idx;
    }
        stack.push(i);
    }
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) //[1,1,4,2,1,1,0,0]

//time - O(N)
//space - O(N)