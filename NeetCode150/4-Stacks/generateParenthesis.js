let generateParenthesis = (n) => {
    let result = [];

    let generateParenthesis = (l, r, s) => {
        if(l > r) return;

        if(l == 0 && r == 0) {
            result.push(s);
            return;
        }

        if(l > 0) generateParenthesis(l - 1, r, s + "(");
        if(r > 0 && r > l)  generateParenthesis(l, r - 1, s + ")");
    }

    generateParenthesis(n, n, "");
    return result;
}