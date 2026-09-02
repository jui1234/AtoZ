const MOD = 1000000007n;

const myPow = function(x, n) {
    if(n === 0n) {
        return 1n;
    }

    let half = myPow(x, n / 2n);

    if(n % 2n === 0n) {
        return (half * half) % MOD;
    }

    return (BigInt(x) * half * half) % MOD;
}

const countGoodNumbers = function(n) {
    n = BigInt(n);

    let even = (n + 1n) / 2n;
    let odd = n / 2n;

    let ans= (myPow(5n, even) * myPow(4n, odd)) % MOD;

    return Number(ans);
}

console.log(countGoodNumbers(1n));
console.log(countGoodNumbers(2n));
console.log(countGoodNumbers(10000000000n));