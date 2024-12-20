function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    // let prefixSum = [0];
    // let minLength = Infinity;

    // for (let i = 0; i < nums.length; i++) {
    //     prefixSum.push(prefixSum[i] + nums[i])
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i; j < nums.length; j++) {
    //         if (prefixSum[j + 1] - prefixSum[i] >= target) {
    //             let len = j - i + 1;
    //             minLength = Math.min(minLength, len);
    //         }
    //     }
    // }

    return minLength === Infinity ? 0 : minLength;
};