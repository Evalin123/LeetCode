function minAnagramLength(s: string): number {
    const n = s.length;

    for (let L = 1; L <= n; L++) {
        if (n % L !== 0) continue;
        const segs = n / L;
        let valid = true;
        const firstFreq = {};
        for (let i = 0; i < L; i++) firstFreq[s[i]] = (firstFreq[s[i]] || 0) + 1;

        for (let k = 1; k < segs; k++) {
            const subFreq = {};
            for (let i = 0; i < L; i++) {
                const c = s[k * L + i];
                subFreq[c] = (subFreq[c] || 0) + 1;
            }
            for (const c in firstFreq) {
                if (firstFreq[c] !== subFreq[c]) valid = false;
            }
            for (const c in subFreq) {
                if (!(c in firstFreq)) valid = false;
            }
            if (!valid) break;
        }
        if (valid) return L;
    }

    return n;
};