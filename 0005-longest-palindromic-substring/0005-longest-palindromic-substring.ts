function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;

    let start = 0, maxLen = 0;

    function expandAroundCenter(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;  
            right++; 
        }
        return [left + 1, right - 1]; 
    }

    for (let i = 0; i < s.length; i++) {
        let [l1, r1] = expandAroundCenter(i, i);
        let [l2, r2] = expandAroundCenter(i, i + 1);

        if (r1 - l1 + 1 > maxLen) {
            start = l1;
            maxLen = r1 - l1 + 1;
        }
        if (r2 - l2 + 1 > maxLen) {
            start = l2;
            maxLen = r2 - l2 + 1;
        }
    }

    return s.substring(start, start + maxLen);
}
