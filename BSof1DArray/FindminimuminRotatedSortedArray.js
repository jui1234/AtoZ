let findMin=function(arr){
    let min=Infinity;

    for(let i=0;i<arr.length;i++){
        min=Math.min(min,arr[i]);
    }

    return min;
}

console.log("findMin",findMin([4,5,6,7,0,1,2,3]))
console.log("findMin",findMin([3,4,5,1,2]))
console.log("findMin",findMin([4,5,6,7,-7,1,2,3]))