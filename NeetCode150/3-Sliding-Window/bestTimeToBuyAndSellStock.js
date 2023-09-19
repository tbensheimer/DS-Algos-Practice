let maxProfit = (prices) => {
    let minValue = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++)      //time O(N)
    {
        minValue = Math.min(minValue, prices[i]);
        maxProfit = Math.max(maxProfit, (prices[i] - minValue));
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])) //5
console.log(maxProfit([7,6,4,3,1])) //0

//time - O(N)
//space - O(1)
