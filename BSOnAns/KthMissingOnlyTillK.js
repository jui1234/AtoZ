let findKthPositive=function(arr,k){
  let num=1;
let result=[];

while(result.length<k){
    if(!arr.includes(num)){
        result.push(num);
    }
    num++;
}
   

    return result[k-1];
}

console.log("findKthPositive",findKthPositive([3,5,7,10],6))
console.log("findKthPositive",findKthPositive([1, 4, 6, 8, 9],3))
console.log("findKthPositive",findKthPositive( [2, 3, 7, 11, 15],5))