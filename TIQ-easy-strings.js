exports.reverseString = (s) => {
    const midPoint = Math.floor(s.length / 2) - 1;
    for (let i = 0; i <= midPoint; i++) {
        let j = s.length - 1 - i;
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};

exports.reverseInteger = (x) => {
    let isNeg = false;
    if (x < 0) isNeg = true;
    const arrX = x.toString().split('');
    let revArr = [];
    if (isNeg) arrX.shift();
    for (let i = 0; i < arrX.length; i++) {
        revArr.unshift(arrX[i]);
    }
    if (isNeg) revArr.unshift('-');
    const reversedX = Number(revArr.join(''));
    if (reversedX > 2 ** 31 || reversedX < 0 - (2 ** 31)) {
        return 0;
    }
    return reversedX;
};