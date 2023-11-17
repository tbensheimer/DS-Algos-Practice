let isPerfectSquare = (num) => {
    let left  = 1;
    let right = num;

    while(left <= right) {
        let mid = parseInt((left + right) / 2);
        let squared = mid * mid;

        if(squared == num) {
            return true;
        } else if (squared >= num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};