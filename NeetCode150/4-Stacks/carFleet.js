let carFleet = (target, position, speed) => {
    let cars = [];
    let carTime = [];

    for(let i = 0; i < position.length; i++) {
        cars.push({
            p: position[i],
            s: speed[i]
        });
    }

    carTime.push((target - cars[0].p) / cars[0].s); //time it takes for closest car to finish (first fleet)

    for(let i = 1; i < cars.length; i++) {
        let car = cars[i];
        let timeToFinish = (target - car.p) / car.s;
        if(timeToFinish > carTime[carTime.length - 1]) carTime.push(timeToFinish);
        //takes longer means a new fleet, if faster than its stuck behind that car in one existing fleet
    }
    return carTime.length; //different times = a fleet
}

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])) //3

//time - O(N log N) ??
//space - O(N)