let carFleet = (target, position, speed) => {
    let len = position.length;
    let map = new Map();
    let fleets = 0;
    let lastTime = -1;

    for(let i = 0; i < len; i++)  {
        map.set(position[i], speed[i]);
    }

    let sorted = [...map.keys()].sort((a,b) => b - a);

    for(let i = 0; i < len; i++) {
        let time = (target - sorted[i]) / map.get(sorted[i]);

        if(time > lastTime)  {
            fleets++;
            lastTime = time;
        }
    }

    return fleets;
}

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])) //3

//time - O(N log N) ??
//space - O(N)