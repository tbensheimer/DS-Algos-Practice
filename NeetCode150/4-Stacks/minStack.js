class MinStack {

constructor() {
    this.stack  = [];
}

push(val) {
    this.stack.push({
        value: val,
        min: this.stack.length === 0 ? val : Math.min(val, this.stack[this.stack.length - 1])
    });
}

pop() {
    return this.stack.pop();
}

readTop() {
    return this.stack[this.stack.length - 1].value;
}

getMin() {
    return this.stack[this.stack.length - 1].min;
}
}

//time - O(1);
//space - O(1);