function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
    const result = sorted.slice(0,k).map(([i]) => i)

    return result
};