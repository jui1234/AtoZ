var SumFromLowToHigh = function(low, high) {
    var sum=0;

    for(let i=low;i<=high;i++){
        sum+=i;
    }

    return sum;
}

console.log(SumFromLowToHigh(1, 5));
console.log(SumFromLowToHigh(3, 7));
console.log(SumFromLowToHigh(10, 15));