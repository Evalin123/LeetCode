function checkSubarraySum(nums: number[], k: number): boolean {
    const modMap = new Map<number, number>();
    modMap.set(0, -1); // 初始化模為 0 時的索引

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const mod = ((prefixSum % k) + k) % k; // 處理負數情況

        if (modMap.has(mod)) {
            // 確保子數組長度至少為 2
            if (i - modMap.get(mod)! > 1) {
                return true;
            }
        } else {
            // 僅在模首次出現時記錄索引
            modMap.set(mod, i);
        }
    }
    // let prefixSum = [0];
    // for(let i = 0; i < nums.length; i++) {
    //     prefixSum.push(prefixSum[i] + nums[i])
    // }

    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if ((prefixSum[j + 1] - prefixSum[i]) % k === 0) {
    //           return true; 
    //         }
    //     }
    // }

    return false;
};