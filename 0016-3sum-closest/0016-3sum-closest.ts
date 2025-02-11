function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            }  
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }
            if (sum < target) {
                left ++
            } else {
                right --
            }
        }
    }
    return closest;
};