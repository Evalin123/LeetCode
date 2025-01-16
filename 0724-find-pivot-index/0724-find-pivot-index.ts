function pivotIndex(nums: number[]): number {
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