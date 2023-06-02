class Solution {
    public boolean isHappy(int n) {
        if (n == 1) return true;
        if (n == 7) return true;
        if (n < 10) return false;
        int sum = 0;
        while (n != 0) {
            int h = n % 10;
            sum = sum + (h * h);
            n = n / 10;
        }
        return isHappy(sum);
    }
}