let majorityElement=function(nums){
    let maxnum=0;
    let maxkey=0;
    let map=new Map();
     for(i of nums){
       map.set(i,(map.get(i)||0)+1);
       if(map.get(i)>maxnum){
        maxnum=map.get(i)
        maxkey=i;
       }
     }
    return maxkey;
}

console.log("majorityElement",majorityElement([7,7,7,2,2,22,22,2,2,2,2,2]))
console.log("majorityElement",majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]))
console.log("majorityElement",majorityElement([1, 1, 1, 2, 1, 2]))
console.log("majorityElement",majorityElement([-1, -1, -1, -1]))