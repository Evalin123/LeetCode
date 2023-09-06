function findMin(nums: number[]): number {
    nums.sort(function(a, b) {
    return a - b;
    });

    return nums[0]
};