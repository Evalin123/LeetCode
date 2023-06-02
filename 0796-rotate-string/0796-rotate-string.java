class Solution {
    public boolean rotateString(String A, String B) {
        if (A.length() == B.length() && (A + A).contains(B)) {
            return true;
        }
        return false;
    }
}