function shiftingLetters(s: string, shifts: number[]): string {
    const shiftSum: number[] = new Array(shifts.length).fill(0);
    const chars = s.split('');
    let totalShift = 0;

    for (let i = shifts.length - 1; i >= 0; i--) {
        totalShift = (totalShift + shifts[i]) % 26; 
        shiftSum[i] = totalShift;
    }
    for (let i = 0; i < chars.length; i++) {
        const currentChar = chars[i];
        const newCharCode = ((currentChar.charCodeAt(0) - 97 + shiftSum[i]) % 26) + 97;
        chars[i] = String.fromCharCode(newCharCode);
    }
    return chars.join('');
};