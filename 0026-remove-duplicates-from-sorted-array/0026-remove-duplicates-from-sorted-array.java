class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int x = 0;
        int y = 1;
        while (y < nums.length) {
            if (nums[x] != nums[y]) {
                x = x+1;
                nums[x] = nums[y];
                y = y+1;
            }
            else {
                y = y+1;
            }
        }
        return x + 1; 
    }
}