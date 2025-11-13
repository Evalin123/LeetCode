function groupAnagrams(strs: string[]): string[][] {
    const res = {};

    for (let str of strs) {
        const count = Array(26).fill(0);
        
        for (let c of str) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        const key = count.join(',');

        if (!res[key]) {
            res[key] = []
        }

        res[key].push(str)
    }

    return Object.values(res)
};