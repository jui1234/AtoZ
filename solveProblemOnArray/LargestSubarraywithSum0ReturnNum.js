let maxLen=function(nums){
    let maxcount=0;
    let mainresult=[];

    for(let i=0;i<nums.length;i++){
              let sum=0;
              let result=[];
        for(let j=i;j<nums.length;j++){
               result.push(nums[j]);
           
               sum+=nums[j];
          
               if(sum===0 && result.length>maxcount ){
             
                maxcount=result.length-1;
                mainresult=[...result];
               }
        }
    }
    
    return mainresult.length===0?0:mainresult.length;
}

console.log("maxLen",maxLen([15, -2, 2, -8, 1, 7, 10, 23]))
console.log("maxLen",maxLen([2, 10, 4]))
console.log("maxLen",maxLen([1, 0, -4, 3, 1, 0]))

