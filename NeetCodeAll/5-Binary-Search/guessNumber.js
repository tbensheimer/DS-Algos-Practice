//guess is an api, returns -1 if number too high, 1 if too low, 0 if equal to mystery number

let guessNumber = (n) => {
    let left = 1;
    let right = n;

    while(left <= right) {
        let mid = parseInt((left + right) / 2);

        let res = guess(mid);
        if(res == -1) {
            right = mid - 1;
        } else if(res == 1) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
};