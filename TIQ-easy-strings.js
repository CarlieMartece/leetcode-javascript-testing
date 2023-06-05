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
  const arrX = x.toString().split("");
  if (isNeg) arrX.shift();
  const midPoint = Math.floor(arrX.length / 2) - 1;
  for (let i = 0; i <= midPoint; i++) {
    let j = arrX.length - 1 - i;
    [arrX[i], arrX[j]] = [arrX[j], arrX[i]];
  }
  if (isNeg) arrX.unshift("-");
  const reversedX = Number(arrX.join(""));
  if (reversedX > 2 ** 31 || reversedX < 0 - 2 ** 31) {
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

exports.validPalindrome = (s) => {
  const charArr = s.toLowerCase().match(/[a-z0-9]/g);
  if (!charArr || charArr.length <= 1) return true;
  const midIndex = Math.floor((charArr.length - 1) / 2);
  for (let i = midIndex; i >= 0; i--) {
    let checkOne = i;
    let checkTwo = charArr.length - 1 - i;
    if (charArr[checkOne] !== charArr[checkTwo]) return false;
  }
  return true;
};

exports.stringToInteger = (s) => {
  let i = 0;
  let plusNeg = 1;
  let digits = [];
  let decPoints = 0;
  s = s.trim();
  if (s[i] === '-') plusNeg = -1;
  if (s[i] === '-' || s[i] === "+") i++;
  while (s[i] && /[0-9\.]/.test(s[i]) && decPoints <= 1) {
    if (s[i] === '.') {
      if (digits.length === 0) {
        return 0;
      } else {
        decPoints++;
        if (decPoints < 1) digits.push(s[i]);
      }
    }
    digits.push(s[i]);
    i++;
  }
  let num = parseFloat(digits.join("")) * plusNeg;
  if (digits.length > 0) {
    if (num >= 2 ** 31) return 2 ** 31 - 1;
    if (num <= 0 - 2 ** 31) return 0 - 2 ** 31;
    return num;
  }
  return 0;
};

exports.needleHaystack = (haystack, needle) => {
  const index = haystack.indexOf(needle);
  return index;
};

exports.longestCommonPrefix = (strs) => {
  // if (strs.length === 0) return "";
  // let min = Math.min.apply(Math, strs.map(function(str) { return str.length; }));
  // let checkIndex = 0;
  // for (let i = 1; i < strs.length; i++) {
  //   let matching = true;
  //   while (matching && checkIndex < min) {
  //     if (strs[i].charAt(checkIndex) !== strs[0].charAt(checkIndex)) {
  //       min = checkIndex;
  //       checkIndex = 0;
  //       matching = false;
  //     } else {
  //       checkIndex++;
  //     }
  //   }
  // }
  // return strs[0].slice(0, min);

  if (strs.length === 0) return "";
  let min = Math.min.apply(Math, strs.map(function(str) { return str.length; }));
  let charMap = {};
  for (let i = 0; i <= min; i++) {
    charMap[i] = [];
  }
  strs.forEach((str) => {
    for (let i = 0; i <= min; i++) {
      charMap[i].push(str.charAt(i));
    }
  });
  let longestPref = 0;
  for (index in charMap) {
    const indexSet = new Set(charMap[index]);
    if (indexSet.size > 1) {
      return strs[0].slice(0, longestPref);
    } else {
      longestPref++;
    }
  }
  return strs[0].slice(0, longestPref);
};