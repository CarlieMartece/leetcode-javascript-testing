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
    if (isNeg) arrX.shift();
    const midPoint = Math.floor(arrX.length / 2) - 1;
    for (let i = 0; i <= midPoint; i++) {
        let j = arrX.length - 1 - i;
        [arrX[i], arrX[j]] = [arrX[j], arrX[i]];
    }
    if (isNeg) arrX.unshift('-');
    const reversedX = Number(arrX.join(''));
    if (reversedX > 2 ** 31 || reversedX < 0 - (2 ** 31)) {
        return 0;
    }
    return reversedX;
};