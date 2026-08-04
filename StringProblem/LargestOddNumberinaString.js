let largeOddNum = function (s) {

    for (let i = s.length - 1; i >= 0; i--) {

        let digit = Number(s[i]);

        if (digit % 2 !== 0) {
            return s.slice(0, i + 1);
        }
    }

    return "";
}

console.log(largeOddNum("5347"));     // "5347"
console.log(largeOddNum("0214638"));  // "021463"
console.log(largeOddNum("4206"));     // ""
console.log(largeOddNum("3542")); 