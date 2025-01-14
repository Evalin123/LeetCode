function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = i; j < nums.length; j++) {
            prod = prod * nums[j];
            if (prod >= k) {
                break;
            } else {
                res++;
            }
        }
    }

    return res
};