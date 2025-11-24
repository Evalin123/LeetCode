function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const output = new Array(n).fill(1);

    // prefix
    for(let i = 1; i < n; i++) {
        output[i] = output[i - 1] * nums[i - 1]
    }

    // suffix
    let right = 1;
    
    for (let i = n - 1; i >=0; i--) {
        output[i] = right * output[i]
        right = nums[i] * right
    }

    return output
};