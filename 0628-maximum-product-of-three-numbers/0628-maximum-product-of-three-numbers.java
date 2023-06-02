class Solution {
    public int maximumProduct(int[] nums) {
        Arrays.sort(nums);
        int ans = 0;
        int len = nums.length-1;
        ans = nums[len] * nums[len-1] * nums[len-2];
        int ans2 = nums[0] * nums[1] * nums[len];
        return Math.max(ans, ans2);
    }
}