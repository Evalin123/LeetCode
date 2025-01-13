function findMaxLength(nums: number[]): number {
    const prefixSumMap = new Map<number, number>();
    prefixSumMap.set(0, -1); // To handle subarrays starting from index 0

    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        // Update the prefix sum: treat 0 as -1
        prefixSum += nums[i] === 1 ? 1 : -1;

        if (prefixSumMap.has(prefixSum)) {
            // If the prefix sum has been seen before, calculate the subarray length
            const previousIndex = prefixSumMap.get(prefixSum)!;
            maxLength = Math.max(maxLength, i - previousIndex);
        } else {
            // Store the first occurrence of the prefix sum
            prefixSumMap.set(prefixSum, i);
        }
    }

    return maxLength;
    // let newArr = [];
    // let maxLen = 1;
    // for(let i = 0; i < nums.length; i++) {
    //     newArr.push(nums[i] === 0 ? -1 : 1)
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     if()
    // }
};