class Solution {
    public String longestWord(String[] words) {
        Set<String> set = new HashSet<String>();
        Arrays.sort(words);
        String result = "";
        for (String word : words) {
            if (word.length() == 1 || set.contains(word.substring(0, word.length()-1))) {
                if (word.length() > result.length()) {
                result = word;
                }
            set.add(word);
            }
        }
        return result;
    }
}