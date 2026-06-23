let stockBuySell=function(arr){
   let maxprofit = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            maxprofit = Math.max(
                maxprofit,
                arr[j] - arr[i]
            );
        }
    }

    return maxprofit;
}

console.log("stockBuySell",stockBuySell([10, 7, 5, 8, 11, 9]))
console.log("stockBuySell",stockBuySell([3, 8, 1, 4, 6, 2]))
console.log("stockBuySell",stockBuySell([5,4,3,2,1]))