function pivotIndex(nums: number[]): number {
    // let leftSum = [0];
    // let rightSum = [0];

    // for(let i = 0; i < nums.length; i++) {
    //     leftSum.push(leftSum[i] + nums[i])
    // }

    // for(let j = nums.length - 1; j >= 0; j--) {
    //     rightSum.unshift(rightSum[nums.length - 1 - j])
    // }

    let sumLeft = 0;
    let total = nums.reduce((a,b)=>a+b);
    for(let i = 0; i < nums.length; i++) {
        let sumRight = total - sumLeft - nums[i];
        if (sumLeft === sumRight) {
            return i
        }
        sumLeft += nums[i]
    } 
    return -1;
};