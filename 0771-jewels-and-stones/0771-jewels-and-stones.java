class Solution {
    public int numJewelsInStones(String J, String S) {
        int ans = 0;
        char[] cJ = J.toCharArray();
        char[] cS = S.toCharArray();
        for (int i = 0; i < cS.length; i++) {
            for (int j = 0; j < cJ.length; j++) {
                if (cS[i] == cJ[j]) {
                    ans = ans +1;
                }
            }
        }
        return ans;
    }
}