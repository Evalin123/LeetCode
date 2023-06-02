class Solution {
    public boolean isAnagram(String s, String t) {
        char[] arrs = s.toCharArray();
        char[] arrt = t.toCharArray();
        Arrays.sort(arrs);
        Arrays.sort(arrt);
        if (arrs.length != arrt.length) return false;
        for (int i = 0; i < arrs.length; i++) {
            if (arrs[i] != arrt[i]) {
                return false;
            }
        }
        return true;
    }
}