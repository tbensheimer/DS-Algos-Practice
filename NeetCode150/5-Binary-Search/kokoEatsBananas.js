let minEatingSpeed  = (piles, h) => {
    let low = 0;
    let high = Math.max(...piles);

    while(low <= end) {
        mid = parseInt((low + high) / 2);   //banana eaten per hour
        let hours = 0;
        
       for(let pile of piles) {
        hours += Math.ceil(pile / mid);
       }

        if(hours > h) {
            //eating to slow, need to increase
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}