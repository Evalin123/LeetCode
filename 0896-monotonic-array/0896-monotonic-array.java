class Solution {
    public boolean isMonotonic(int[] A) {
        boolean inc = true, dec = true;
        for (int i = 1; i < A.length; i++) {
            if (A[i-1] < A[i]) {
                dec = false;
            }
            else if (A[i-1] > A[i]) {
                inc = false;
            }
        }
        if (inc == false && dec == false) {
            return false;
        }
        return true;
    }
}