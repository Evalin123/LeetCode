/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2) {
        return false;
    }
    const half = sum / 2
    const maxNum = Math.max(...nums);

    if (maxNum > half) {
        return false;
    }

    if (maxNum === half) {
        return true
    }

    const reach = new Array(half + 1).fill(false);
    reach[0] = true;

    for (let num of nums) {
        for (let i = half; i >= num; i--) {
            if (reach[i - num]) {
                reach[i] = true;
                
                if (reach[half]) {
                    return true;
                }
            }
        }
    }
    return false
};