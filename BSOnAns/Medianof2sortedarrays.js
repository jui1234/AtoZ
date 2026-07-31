let median=function(arr1,arr2){
    let result=[...arr1,...arr2];
    result.sort((a,b)=>a-b);
    let mid = Math.floor(result.length / 2);
 

        if(result.length%2===0){
       
        let ans=(result[mid]+result[mid-1])/2;
                return ans;
    }
    else{
                 return result[mid];

    }
}

console.log("median",median([2,4,6],[1,3,5]))
console.log("median",median([2,4,6],[1,3]))
console.log("median",median([2,4,5],[1,6]))