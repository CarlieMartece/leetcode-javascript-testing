exports.reverseString = (s) => {
    const midPoint = Math.floor(s.length / 2) - 1;
    for (let i = 0; i <= midPoint; i++) {
        let j = s.length - 1 - i;
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};