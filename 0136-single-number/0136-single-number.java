class Solution {
    public int singleNumber(int[] nums) {
        HashMap <Integer,Integer> ans = new HashMap<>();
        for (int i : nums) {
            if (ans.containsKey(i)) {
                ans.remove(i);
            }
            else {
                ans.put(i,1);
            }
        }
        return (int)ans.keySet().toArray()[0];
    }
}