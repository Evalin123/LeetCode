function subarraySum(nums: number[], k: number): number {
    const prefixSum = [0];
    let count = 0;

    for (let i = 0; i < nums.length; i++){
        prefixSum.push(prefixSum[i]+nums[i])
    }

    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if(prefixSum[j + 1] - prefixSum[i] === k) {
                count = count + 1
            }
        }
    }

    return count;
};