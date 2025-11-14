function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const bucket = Array(nums.length + 1).fill(null).map(() => []);

    for (let [num, freq] of map.entries()) {
        bucket[freq].push(num)
    }

    const res = [];
    for (let i = bucket.length - 1; i >= 0 && res.length < k; i--){
        if (bucket[i].length > 0) {
            res.push(...bucket[i])
        }
    }

    return res.slice(0, k)
};