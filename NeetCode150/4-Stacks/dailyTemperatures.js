let dailyTemperatures = (temps) => {
    let stack = [];
    let res = new Array(temps.length).fill(0);

    for(let i = 0; i < temps.length; i++) {

        while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
            let temp = stack.pop();
            res[temp] = i - temp;
        }
        stack.push(i);
    }
    return res;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) //[1,1,4,2,1,1,0,0]

//time - O(N)
//space - O(N)