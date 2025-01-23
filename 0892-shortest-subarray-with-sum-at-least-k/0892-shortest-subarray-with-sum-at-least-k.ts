function shortestSubarray(nums: number[], k: number): number {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let shortestLen = Infinity;
    const deque: number[] = []; 

    for (let i = 0; i <= n; i++) {

        if (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            shortestLen = Math.min(shortestLen, i - deque[0]);
            deque.shift(); 
            i--; 
            continue;
        }

        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);
    }

    // let shortestLen = Infinity;
    // for(let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     for(let j = i; j < nums.length; j++) {
    //         sum += nums[j]
    //         if (sum >= k) {
    //             shortestLen = Math.min(shortestLen, j - i + 1); 
    //             break; 
    //         }
    //     }
    // }
    return shortestLen === Infinity ? -1 : shortestLen
};