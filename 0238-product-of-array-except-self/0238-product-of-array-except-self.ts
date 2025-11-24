function productExceptSelf(nums: number[]): number[] {
    const output = new Array(nums.length).fill(1);

    // prefix
    for(let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1]
    }

    // suffix
    let right = 1;
    
    for (let i = nums.length - 1; i >=0; i--) {
        output[i] = right * output[i]
        right = nums[i] * right
    }

    return output
};