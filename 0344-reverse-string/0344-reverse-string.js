/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length;
    const times = Math.floor(len/2); 
    for (let i = 0; i < times; i++) {
        let temNum = s[i];
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temNum
    }

    return s
};
