let majorityElementTwo=function(nums){
    let n=nums.length/3;

    let result=[];
    let map=new Map();

    for(let i of nums){
        map.set(i,(map.get(i)||0)+1)

        if(map.get(i)>n && !result.includes(i)){
            result.push(i)
        }
    }

 
    return result;
}

console.log("majorityElementTwo",majorityElementTwo([1,1,1,2,2,2,3,3]))
