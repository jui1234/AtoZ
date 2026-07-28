let findKthPositive=function(arr,k){
    let result=[];
    let high=Math.max(...arr);
  

    for(let i=1;i<=high;i++){
        if(!arr.includes(i)){
        
           result.push(i);
        }
    }

   

    return result[k-1];
}

console.log("findKthPositive",findKthPositive([3,5,7,10],6))
console.log("findKthPositive",findKthPositive([1, 4, 6, 8, 9],3))
console.log("findKthPositive",findKthPositive( [2, 3, 7, 11, 15],5))