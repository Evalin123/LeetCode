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

    // let maxLength = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     let count = 0;

    //     for (let j = i; j < nums.length; j++) {
    //         // Increment count for 1, decrement for 0
    //         count += nums[j] === 1 ? 1 : -1;

    //         // Check if the subarray has an equal number of 0s and 1s
    //         if (count === 0) {
    //             maxLength = Math.max(maxLength, j - i + 1);
    //         }
    //     }
    // }

    return maxLength;
};