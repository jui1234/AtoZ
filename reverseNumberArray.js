var reverseNumberArray = function(arr){
    var reversedArr = [];
    for(let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);//
    }
    return reversedArr; 
}

console.log(reverseNumberArray([1,2,3,4,5]));
console.log(reverseNumberArray([10,20,30,40,50]));
console.log(reverseNumberArray([5,4,3,2,1]));