function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0; // Handle edge case where no product can be less than k

    let count = 0;
    let product = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k) {
            product /= nums[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
    // let res = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     let prod = 1;
    //     for (let j = i; j < nums.length; j++) {
    //         prod = prod * nums[j];
    //         if (prod >= k) {
    //             break;
    //         } else {
    //             res++;
    //         }
    //     }
    // }

    // return res
};