class Solution {
    public int[] fairCandySwap(int[] A, int[] B) {
        int atotal = 0, btotal = 0;
        Set<Integer> setB = new HashSet();

        for(int num : A) atotal += num;
        for(int num : B) {
            btotal += num;
            setB.add(num);
        }

        for(int num : A) {
            if(setB.contains(num + (btotal - atotal)/2)) 
                return new int[] {num, num + (btotal - atotal)/2}; 
        }
        return null;
        }
}