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

exports.firstUnique = (s) => {
    // const sArray = s.split("");
    // for (let i = 0; i < sArray.length; i++) {
    //     let checkChar = sArray.splice(i, 1, 'checking');
    //     if (sArray.indexOf(checkChar[0]) === -1) {
    //         return i;
    //     }
    //     sArray.splice(i, 1, checkChar[0]);
    // }
    // return -1;
    let countMap = {};
    const sArray = s.split("");
    for (let i = 0; i < sArray.length; i++) {
        let char = sArray[i];
        if (!countMap.hasOwnProperty(char)) {
            countMap[char] = [i];
        } else {
            countMap[char].push(i);
        }
    }
    for (char in countMap) {
        if (countMap[char].length === 1) {
            return countMap[char][0];
        }
    }
    return -1;
};

exports.validAnagram = (s, t) => {
    const sSort = s.split("").sort().join("");
    const tSort = t.split("").sort().join("");
    return sSort === tSort;
};