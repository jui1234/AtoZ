var ReverseNumberInSameArray = function (arr) {
    let left=0;
    let right=arr.length-1; 

    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    return arr;
}

console.log(ReverseNumberInSameArray([1,2,3,4,5]));
console.log(ReverseNumberInSameArray([10,20,30,40,50]));
console.log(ReverseNumberInSameArray([5,4,3,2,1]));