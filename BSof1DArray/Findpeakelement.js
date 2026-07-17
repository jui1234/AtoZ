let findPeakElement=function(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
            return i;
        }
    }
    return -1;
}

console.log("findPeakElement",findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]))
console.log("findPeakElement",findPeakElement([1, 2, 1, 3, 5, 6, 4]))
console.log("findPeakElement",findPeakElement([-2, -1, 3, 4, 5]))