let largestArea = (heights) => {
    let stack = [];
    let maxArea = 0;
    let top, topH, curr, currH, area;
    heights.push(0);

    for(let i = 0; i < heights.length; i++) {
        top = stack[stack.length - 1];
        topH = heights[top];

        while(stack.length && topH > heights[i]) {
            curr = stack.pop();
            currH = heights[curr];
            top = stack[stack.length - 1];
            topH = heights[top];
            area = currH * (stack.length ? i - 1 - top : i);
            maxArea = Math.max(maxArea, area);
        }

        stack.push(i);
    }
    return maxArea;
}