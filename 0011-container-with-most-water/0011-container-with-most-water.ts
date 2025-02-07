function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while(left < right) {
        const h = Math.min(height[left], height[right]);
        area = Math.max(area, (right - left) * h);
        
        if (height[left] < height[right]) {
        left++;
        } else {
            right--;
        }
    }
    return area
};