let countPoints = (operations) => {
    let res = [];

    for(let i = 0; i < operations.length; i++) {
        let len = res.length;

        switch(operations[i]) {
            case "C":
            res.pop();
            break;
            case "D":
            res.push(2 * res[len - 1]);
            break;
            case "+":
            res.push(res[len - 1] + res[len - 2]);
            break;
            default:
            res.push(parseInt(operations[i]))
            break;
        }
    }

    return res.length ? res.reduce((now, prev) => {
       return now + prev
    }, 0) : 0
};