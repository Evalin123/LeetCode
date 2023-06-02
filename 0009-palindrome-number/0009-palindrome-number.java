class Solution {
    public boolean isPalindrome(int x) {
        int y = x;
        int res = 0;
        while (y != 0) {
            res = y % 10 + res * 10;
            y = y / 10; 
        }
        if (x < 0 || x != res) {
            return false;
        }
        return true;
    }
}