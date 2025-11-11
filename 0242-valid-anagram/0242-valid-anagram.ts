function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    const sObj = {};
    const tObj = {};


    for (let i = 0; i < s.length; i++) {
        sObj[s[i]] = (sObj[s[i]] || 0) + 1;
        tObj[t[i]] = (tObj[t[i]] || 0) + 1;
    }

    for (let key in sObj) {
        if (sObj[key] !== tObj[key]) {
            return false
        }
    }

    return true
};