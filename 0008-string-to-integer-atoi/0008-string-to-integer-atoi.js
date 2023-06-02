/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function(s) {
//     const arr = s.split(' ');
//     const numberRegex = /^[-+]?[0-9]*\.?[0-9]+$/
//     const emptyStr = /^$/g;
//     let numberStr = "";
//     let ans = 0;
//     function limitNumberWithinRange(num){
//         const MIN = Math.pow(-2, 31);
//         const MAX = Math.pow(2, 31)-1;
//         const parsed = parseInt(num)
//         return Math.min(Math.max(parsed, MIN), MAX)
//     }
//     for (i = 0; i < arr.length; i++) {
//         let isNumber = numberRegex.test(arr[i])
//         let isEmptyStr = emptyStr.test(arr[i])
//         if (!isEmptyStr) {
//             if (isNumber) {
//                 numberStr += arr[i]
//             }
//             else {
//                 ans = Number(numberStr)
//                 return limitNumberWithinRange(ans);
//             }
//         }
//         if (i === arr.length-1 ) {
//             ans = Number(numberStr)
//             return limitNumberWithinRange(ans);
//         }
//     }  
// };
// +50
var myAtoi = function (s) {
  let len = s.length;
  let num = 0;
  let i = 0;
  while (s[i] === ' ') {
    i++;
  }
  let positive = s[i] === '+'; //true
  let negative = s[i] === '-'; // false
  positive === true ? i++ : i; //i -> 1
  negative === true ? i++ : i; 
  while (i < len && s[i] >= '0' && s[i] <= '9') {
    num = num * 10 + (s[i] - '0');
    i++; //4 //42
  }
  num = negative ? -num : num;
  num = num > 2147483647 ? 2147483647 : num;
  num = num < -2147483648 ? -2147483648 : num;
  return parseInt(num);
}