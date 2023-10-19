let trap = (height) => {
    if(height.length == 0 || height == null) return 0;

    let l =  0;
    let r = height.length - 1;
    let lMax = 0;
    let rMax = 0;
    let res = 0;

    while(l < r) {                          //time - O(N);
        lMax = Math.max(lMax, height[l]);
        res += lMax - height[l];

        rMax = Math.max(rMax, height[r]);
        res += rMax - height[r];

        height[l] < height[r] ? l++ : r--;
    }
    return res;
}

console.log(trap([4,2,0,3,2,5])) //9

//time - O(N);
//space - O(1);