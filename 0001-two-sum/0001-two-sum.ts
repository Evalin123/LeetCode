function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const r = target - nums[i];
        if (map.has(r)) {
            const j = map.get(r)
            return i < j ? [i,j] : [j,i]
        }

        map.set(nums[i], i)
    }

    return []
};