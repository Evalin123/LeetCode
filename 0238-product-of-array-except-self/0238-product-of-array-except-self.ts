function productExceptSelf(nums: number[]): number[] {
   let ans = new Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    // let prefix = [1]; 
    // let suffix = [1]; 
    // let ans = [];

    // for (let i = 0; i < nums.length; i++){
    //     prefix.push(prefix[i] * nums[i]);
    // }

    // for (let j = nums.length - 1; j > 0; j--) {
    //     suffix.unshift(suffix[0] * nums[j]);
    // }

    // for (let i = 0; i < nums.length; i++){
    //     ans.push(prefix[i] * suffix[i]);
    // }

    return ans
};