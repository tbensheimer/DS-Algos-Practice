let maxArea = (height) => {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {                               //time - O(N)
        let y = Math.min(height[left], height[right]);
        let area = (right - left) * y;
        if(area > result) result = area;                //space - O(N)

        if(height[left] < height[right]) left++;
        else right--;
    }
    return result;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])) //49

//time - O(N);
//space - O(N);