/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (i=0; i < tokens.length ; i++) {
        if (!isNaN(tokens[i]) && isFinite(tokens[i])) {
            stack.push(tokens[i]);
        } 
        else {
            let a = stack.pop(); 
            let b = stack.pop(); 
            if (tokens[i] === '+') {
                stack.push(parseInt(a) + parseInt(b)); 
            } else if (tokens[i] === '-') {
                stack.push(parseInt(b) - parseInt(a));
            } else if (tokens[i] === '*') {
                stack.push(parseInt(a) * parseInt(b));
            } else if (tokens[i] === '/') {
                stack.push(Math.trunc(parseInt(b) / parseInt(a)));
            }
        }
    }

    return stack[0];
};